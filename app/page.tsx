'use client';
import { useMemo, useState } from 'react';
import { Activity, ArrowLeft, BarChart3, Check, ChevronRight, ClipboardCheck, Download, Menu, Plus, Search, Settings, Trash2, Users, Waves, X } from 'lucide-react';

type Stroke = 'Freestyle' | 'Backstroke' | 'Breaststroke' | 'Butterfly';
type Feedback = { arms: string[]; legs: string[] };
type Assessment = { id: string; swimmerId: string; stroke: Stroke; rating: number; feedback: Feedback; note: string; date: string; coach: string };
type Swimmer = { id: string; first: string; last: string; group: string; age: number };
type View = 'dashboard' | 'swimmers' | 'assess' | 'reports' | 'settings';
const strokes: Stroke[] = ['Freestyle','Backstroke','Breaststroke','Butterfly'];
const feedbackOptions: Record<Stroke, Feedback> = {
  Freestyle: { arms: ['High elbow recovery','Improve hand entry','Extend forward reach','Improve underwater pull','Maintain alternating rhythm','Good arm technique'], legs: ['Kick from hips','Reduce knee bending','Relax ankles','Maintain steady flutter kick','Improve propulsion','Good leg technique'] },
  Backstroke: { arms: ['Straight arm recovery','Improve little-finger entry','Maintain alternating rhythm','Improve underwater pull','Keep shoulders rotating','Good arm technique'], legs: ['Kick from hips','Reduce knee bending','Keep toes near surface','Maintain flutter kick','Improve body position','Good leg technique'] },
  Breaststroke: { arms: ['Improve outward sweep','Keep elbows high','Recover hands together','Avoid pulling too far back','Coordinate pull and breath','Good arm technique'], legs: ['Turn feet outward','Improve whip kick','Bring heels toward seat','Snap legs together','Improve glide timing','Good leg technique'] },
  Butterfly: { arms: ['Recover arms together','Improve hand entry','Maintain symmetrical pull','Finish push past hips','Coordinate arms and breathing','Good arm technique'], legs: ['Use dolphin kick','Kick from core and hips','Keep legs together','Improve second kick timing','Reduce excessive knee bend','Good leg technique'] }
};
const initialSwimmers: Swimmer[] = [
  { id:'s1', first:'Emma', last:'Adams', age:9, group:'Junior' },
  { id:'s2', first:'Oliver', last:'Brown', age:11, group:'Junior' },
  { id:'s3', first:'Sophie', last:'Jones', age:13, group:'Development' },
  { id:'s4', first:'Noah', last:'Smith', age:15, group:'Development' },
  { id:'s5', first:'Mila', last:'Visser', age:10, group:'Junior' }
];
const initialAssessments: Assessment[] = [
  ['s1','Freestyle',4],['s1','Backstroke',3],['s1','Breaststroke',3],['s1','Butterfly',2],
  ['s2','Freestyle',3],['s2','Backstroke',4],['s2','Breaststroke',2],['s2','Butterfly',2],
  ['s3','Freestyle',5],['s3','Backstroke',4],['s3','Breaststroke',4],['s3','Butterfly',3],
  ['s4','Freestyle',3],['s4','Backstroke',3],['s4','Breaststroke',4],['s4','Butterfly',2],
  ['s5','Freestyle',2],['s5','Backstroke',3]
].map(([swimmerId,stroke,rating],i)=>({ id:'a'+i, swimmerId:String(swimmerId), stroke:stroke as Stroke, rating:Number(rating), feedback:{arms:[],legs:[]}, note:'', date:'2026-11-10', coach:'Demo coach' }));
const ratingLabels = ['Not assessed','Beginner','Developing','Competent','Proficient','Excellent'];
const sorter = (a:Swimmer,b:Swimmer) => a.last.localeCompare(b.last) || a.first.localeCompare(b.first);
const fullName = (s:Swimmer) => s.first+' '+s.last;
const latest = (assessments:Assessment[], id:string, stroke:Stroke) => assessments.filter(a=>a.swimmerId===id && a.stroke===stroke).sort((a,b)=>b.date.localeCompare(a.date)||b.id.localeCompare(a.id))[0];
const today = () => new Date().toISOString().slice(0,10);
const uid = () => Math.random().toString(36).slice(2)+Date.now().toString(36);
function csvCell(value:string|number){return '"'+String(value).replace(/"/g,'""')+'"';}
function exportCSV(swimmers:Swimmer[], assessments:Assessment[]){
  const rows=[['Surname','First name','Age','Group',...strokes].map(csvCell).join(',')];
  swimmers.slice().sort(sorter).forEach(s=>rows.push([s.last,s.first,s.age,s.group,...strokes.map(st=>latest(assessments,s.id,st)?.rating??'')].map(csvCell).join(',')));
  const blob=new Blob([rows.join('\r\n')],{type:'text/csv;charset=utf-8'});
  const url=URL.createObjectURL(blob); const a=document.createElement('a');a.href=url;a.download='dok-swims-demo-report.csv';a.click();URL.revokeObjectURL(url);
}
export default function Home(){
  const [view,setView]=useState<View>('dashboard');
  const [swimmers,setSwimmers]=useState<Swimmer[]>(initialSwimmers);
  const [assessments,setAssessments]=useState<Assessment[]>(initialAssessments);
  const [search,setSearch]=useState('');
  const [group,setGroup]=useState('All groups');
  const [selected,setSelected]=useState('s1');
  const [stroke,setStroke]=useState<Stroke>('Freestyle');
  const [rating,setRating]=useState(3);
  const [arms,setArms]=useState<string[]>([]);
  const [legs,setLegs]=useState<string[]>([]);
  const [note,setNote]=useState('');
  const [notice,setNotice]=useState('');
  const [showAdd,setShowAdd]=useState(false);
  const [first,setFirst]=useState(''); const [last,setLast]=useState(''); const [age,setAge]=useState('9'); const [newGroup,setNewGroup]=useState('Junior');
  const [mobileNav,setMobileNav]=useState(false);
  const ordered=useMemo(()=>swimmers.slice().sort(sorter),[swimmers]);
  const filtered=ordered.filter(s=>(group==='All groups'||s.group===group)&&fullName(s).toLowerCase().includes(search.toLowerCase()));
  const active=swimmers.find(s=>s.id===selected);
  const totalRatings=assessments.filter(a=>a.rating>0);
  const average=totalRatings.length?(totalRatings.reduce((sum,a)=>sum+a.rating,0)/totalRatings.length).toFixed(1):'—';
  function openAssessment(id:string,st:Stroke='Freestyle'){setSelected(id);changeStroke(id,st);setView('assess');setNotice('');}
  function changeStroke(id:string,st:Stroke){setStroke(st);const prior=latest(assessments,id,st);setRating(prior?.rating??3);setArms([]);setLegs([]);setNote('');}
  function saveAssessment(){if(!active)return;const next:Assessment={id:uid(),swimmerId:active.id,stroke,rating,feedback:{arms,legs},note:note.trim().slice(0,500),date:today(),coach:'Demo coach'};setAssessments(prev=>[...prev,next]);setNotice(stroke+' assessment saved for '+fullName(active)+' (demo session only).');}
  function addSwimmer(e:React.FormEvent){e.preventDefault();const a=Number(age);if(!first.trim()||!last.trim()||!Number.isInteger(a)||a<5||a>18){setNotice('Enter a first name, surname and age between 5 and 18.');return;}const s={id:uid(),first:first.trim().slice(0,50),last:last.trim().slice(0,50),age:a,group:newGroup.trim().slice(0,50)||'Unassigned'};setSwimmers(prev=>[...prev,s]);setSelected(s.id);setFirst('');setLast('');setShowAdd(false);setNotice('Demo swimmer added for this session only.');}
  function removeSwimmer(id:string){const s=swimmers.find(x=>x.id===id);if(!s||!window.confirm('Remove '+fullName(s)+' from this demo session, including their assessments?'))return;setSwimmers(prev=>prev.filter(x=>x.id!==id));setAssessments(prev=>prev.filter(x=>x.swimmerId!==id));if(selected===id)setSelected(swimmers.find(x=>x.id!==id)?.id??'');setNotice('Demo swimmer removed.');}
  function go(next:View){setView(next);setNotice('');setMobileNav(false);}
  const nav:[View,string,React.ReactNode][]=[['dashboard','Overview',<Activity size={19} key="d"/>],['swimmers','Swimmers',<Users size={19} key="s"/>],['assess','Assess',<ClipboardCheck size={19} key="a"/>],['reports','Reports',<BarChart3 size={19} key="r"/>],['settings','Settings',<Settings size={19} key="t"/>]];
  return <div className="app-shell">
    <aside className={'sidebar '+(mobileNav?'open':'')}>
      <div className="brand"><Waves size={28}/><div><strong>DOK Swims</strong><small>Coach workspace</small></div></div>
      <nav aria-label="Main navigation">{nav.map(([id,label,icon])=><button key={id} className={'nav-item '+(view===id?'active':'')} onClick={()=>go(id)}>{icon}{label}</button>)}</nav>
      <div className="sidebar-foot"><span className="demo-dot"/> Demo workspace<br/><small>No real swimmer data</small></div>
    </aside>
    <div className="workspace">
      <header className="topbar"><button className="mobile-menu" aria-label="Toggle navigation" onClick={()=>setMobileNav(!mobileNav)}><Menu/></button><div><strong>DOK Swims</strong><span> / {nav.find(n=>n[0]===view)?.[1]}</span></div><span className="demo-tag">DEMO MODE</span></header>
      <main className="content">
        {notice&&<div className="notice" role="status">{notice}<button aria-label="Dismiss notice" onClick={()=>setNotice('')}><X size={16}/></button></div>}
        {view==='dashboard'&&<><div className="heading"><div><span className="eyebrow">TEAM OVERVIEW</span><h1>Every stroke, a step forward.</h1><p>Track technique, celebrate progress, and keep your team moving.</p></div><button className="primary" onClick={()=>go('swimmers')}><Users size={17}/> View swimmers</button></div>
          <div className="stat-grid"><div className="stat"><span>Swimmers</span><strong>{swimmers.length}</strong><small>Across all groups</small></div><div className="stat"><span>Assessments</span><strong>{assessments.length}</strong><small>Recorded in this session</small></div><div className="stat"><span>Average rating</span><strong>{average}<small> / 5</small></strong><small>Across recorded assessments</small></div></div>
          <div className="panel"><div className="panel-title"><div><h2>Team snapshot</h2><p>Latest stroke ratings by swimmer</p></div><button className="text-button" onClick={()=>go('reports')}>Full report <ChevronRight size={16}/></button></div><div className="table-scroll"><table><thead><tr><th>Swimmer</th>{strokes.map(st=><th key={st}>{st}</th>)}</tr></thead><tbody>{ordered.map(s=><tr key={s.id}><td><button className="name-link" onClick={()=>openAssessment(s.id)}>{fullName(s)}</button><small>{s.group}</small></td>{strokes.map(st=><td key={st}><span className={'rating-chip r'+(latest(assessments,s.id,st)?.rating??0)}>{latest(assessments,s.id,st)?.rating??'—'}</span></td>)}</tr>)}</tbody></table></div></div>
        </>}
        {view==='swimmers'&&<><div className="heading"><div><span className="eyebrow">TEAM DIRECTORY</span><h1>Swimmers</h1><p>Sorted alphabetically by surname.</p></div><button className="primary" onClick={()=>setShowAdd(true)}><Plus size={17}/> Add demo swimmer</button></div>
          <div className="toolbar"><label className="search"><Search size={18}/><input aria-label="Search swimmers" placeholder="Search swimmers..." value={search} onChange={e=>setSearch(e.target.value)}/></label><select aria-label="Filter group" value={group} onChange={e=>setGroup(e.target.value)}>{['All groups',...new Set(swimmers.map(s=>s.group))].map(g=><option key={g}>{g}</option>)}</select><span className="count">{filtered.length} swimmers</span></div>
          <div className="swimmer-grid">{filtered.map(s=><article className="swimmer-card" key={s.id}><div className="avatar">{s.first[0]}{s.last[0]}</div><div className="swimmer-info"><h2>{fullName(s)}</h2><p>Age {s.age} · {s.group}</p><div className="mini-ratings">{strokes.map(st=><span title={st} key={st}>{st.slice(0,2)} <b>{latest(assessments,s.id,st)?.rating??'—'}</b></span>)}</div></div><div className="card-actions"><button className="secondary" onClick={()=>openAssessment(s.id)}>Assess <ChevronRight size={16}/></button><button className="icon-button" aria-label={'Remove '+fullName(s)} onClick={()=>removeSwimmer(s.id)}><Trash2 size={16}/></button></div></article>)}</div>{filtered.length===0&&<div className="empty">No swimmers match your search.</div>}
        </>}
        {view==='assess'&&<><div className="heading"><div><span className="eyebrow">TECHNIQUE REVIEW</span><h1>Stroke assessment</h1><p>Choose a swimmer, rate the stroke and select coaching feedback.</p></div></div>
          <div className="assessment-layout"><section className="panel"><div className="field-grid"><label>Swimmer<select value={selected} onChange={e=>{setSelected(e.target.value);changeStroke(e.target.value,stroke);}}>{ordered.map(s=><option key={s.id} value={s.id}>{s.last}, {s.first}</option>)}</select></label><label>Stroke<select value={stroke} onChange={e=>changeStroke(selected,e.target.value as Stroke)}>{strokes.map(st=><option key={st}>{st}</option>)}</select></label></div>
          <div className="rating-section"><h2>Overall stroke rating</h2><p>1 = Beginner · 5 = Excellent</p><div className="rating-buttons" role="group" aria-label="Stroke rating">{[1,2,3,4,5].map(n=><button key={n} aria-pressed={rating===n} className={rating===n?'selected':''} onClick={()=>setRating(n)}>{n}</button>)}</div><strong className="rating-name">{ratingLabels[rating]}</strong></div>
          <div className="feedback-columns">{(['arms','legs'] as const).map(part=><div key={part}><h2>{part==='arms'?'Arm technique':'Leg technique'}</h2><p>Select any relevant observations</p><div className="checklist">{feedbackOptions[stroke][part].map(option=><label key={option}><input type="checkbox" checked={(part==='arms'?arms:legs).includes(option)} onChange={e=>{const setter=part==='arms'?setArms:setLegs;setter(prev=>e.target.checked?[...prev,option]:prev.filter(x=>x!==option));}}/><span>{option}</span></label>)}</div></div>)}</div>
          <label className="notes-label">Coach notes (optional)<textarea maxLength={500} value={note} onChange={e=>setNote(e.target.value)} placeholder="Add a short observation or next goal..." rows={3}/></label><button className="primary save" onClick={saveAssessment} disabled={!active}><Check size={18}/> Save demo assessment</button></section>
          <aside className="panel history"><h2>Assessment history</h2><p>{active?fullName(active):'Select a swimmer'} · {stroke}</p>{assessments.filter(a=>a.swimmerId===selected&&a.stroke===stroke).slice().reverse().map(a=><div className="history-item" key={a.id}><div><strong>{a.rating}/5 · {ratingLabels[a.rating]}</strong><small>{a.date} · {a.coach}</small></div>{[...a.feedback.arms,...a.feedback.legs].length>0&&<p>{[...a.feedback.arms,...a.feedback.legs].join(' · ')}</p>}{a.note&&<p>{a.note}</p>}</div>)}{!assessments.some(a=>a.swimmerId===selected&&a.stroke===stroke)&&<div className="empty">No assessments yet.</div>}</aside></div>
        </>}
        {view==='reports'&&<><div className="heading"><div><span className="eyebrow">PROGRESS & INSIGHTS</span><h1>Team reports</h1><p>Latest ratings and assessment coverage for each swimmer.</p></div><button className="primary" onClick={()=>exportCSV(swimmers,assessments)}><Download size={17}/> Export CSV</button></div>
          <div className="panel"><div className="panel-title"><div><h2>Stroke performance</h2><p>Latest rating for each of the four strokes</p></div></div><div className="table-scroll"><table><thead><tr><th>Swimmer</th><th>Group</th>{strokes.map(st=><th key={st}>{st}</th>)}<th>Average</th></tr></thead><tbody>{ordered.map(s=>{const scores=strokes.map(st=>latest(assessments,s.id,st)?.rating).filter((n):n is number=>n!==undefined);return <tr key={s.id}><td><button className="name-link" onClick={()=>openAssessment(s.id)}>{s.last}, {s.first}</button></td><td>{s.group}</td>{strokes.map(st=><td key={st}><span className={'rating-chip r'+(latest(assessments,s.id,st)?.rating??0)}>{latest(assessments,s.id,st)?.rating??'—'}</span></td>)}<td><strong>{scores.length?(scores.reduce((a,b)=>a+b,0)/scores.length).toFixed(1):'—'}</strong></td></tr>})}</tbody></table></div></div><div className="report-note">CSV export contains only the fictional/demo data currently visible in this browser session. Ratings are not stored on a server.</div>
        </>}
        {view==='settings'&&<><div className="heading"><div><span className="eyebrow">TEAM ADMINISTRATION</span><h1>Settings & coach access</h1><p>Security and collaboration will be enabled with the database integration.</p></div></div><div className="settings-grid"><section className="panel"><h2>Coach invitations</h2><p>Invite coaches by email, manage administrator permissions, and revoke access.</p><button className="secondary" disabled title="Requires secure authentication and database">Invitations coming with secure accounts</button></section><section className="panel"><h2>Data protection</h2><p>This version uses fictional sample swimmers and in-memory session data only. Refreshing the page resets all changes. Do not enter real children's names or personal information.</p><span className="pill">Secure backend not connected</span></section><section className="panel"><h2>Rating scale</h2>{ratingLabels.slice(1).map((label,i)=><p key={label}><span className={'rating-chip r'+(i+1)}>{i+1}</span> {label}</p>)}</section></div></>}
      </main>
    </div>
    {showAdd&&<div className="modal-backdrop" onClick={()=>setShowAdd(false)}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="add-title" onClick={e=>e.stopPropagation()}><div className="modal-title"><h2 id="add-title">Add demo swimmer</h2><button className="icon-button" aria-label="Close" onClick={()=>setShowAdd(false)}><X/></button></div><p>Use fictional details only. Nothing is saved after a refresh.</p><form onSubmit={addSwimmer}><label>First name<input required maxLength={50} value={first} onChange={e=>setFirst(e.target.value)}/></label><label>Surname<input required maxLength={50} value={last} onChange={e=>setLast(e.target.value)}/></label><div className="field-grid"><label>Age<input type="number" min="5" max="18" required value={age} onChange={e=>setAge(e.target.value)}/></label><label>Group<select value={newGroup} onChange={e=>setNewGroup(e.target.value)}><option>Junior</option><option>Development</option><option>Senior</option></select></label></div><button className="primary save" type="submit"><Plus size={17}/> Add swimmer</button></form></div></div>}
  </div>;
}
