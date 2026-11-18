const strokes = ['Freestyle', 'Backstroke', 'Breaststroke', 'Butterfly'];
const features = [
  { title: 'Swimmer directory', text: 'Alphabetical team list with swimmer profiles and group management.' },
  { title: 'Stroke assessments', text: 'Rate all four strokes and record separate arms and legs technique feedback.' },
  { title: 'Progress reports', text: 'Review historical assessments and compare progress across the team.' },
  { title: 'Coach access', text: 'Planned email invitations and role-based access for authorised coaches.' },
];
export default function Home() {
  return <><header><strong>◉ DOK Swims</strong><span>Team skills tracker</span></header><main><section className="hero"><span className="pill">Project foundation</span><h1>Every stroke. Every step forward.</h1><p>A simple place for swim coaches to assess technique and follow each swimmer&apos;s progress over time.</p></section><div className="strokes">{strokes.map(stroke => <span className="stroke" key={stroke}>{stroke}</span>)}</div><section className="grid" aria-label="Planned app features">{features.map(feature => <article className="card" key={feature.title}><h2>{feature.title}</h2><p className="muted">{feature.text}</p></article>)}</section><aside className="notice"><strong>Setup in progress.</strong> This is the initial deployable foundation, not a live swimmer database. Accounts, permissions, invitations and secure assessments must be implemented and tested before entering information about children.</aside></main><footer>DOK Swims · Built for coaches</footer></>;
}
