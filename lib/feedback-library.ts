export type StrokeName = 'Freestyle' | 'Backstroke' | 'Breaststroke' | 'Butterfly';
export type Language = 'en' | 'nl';
export type FeedbackCategory = 'arms' | 'legs' | 'body' | 'breathing' | 'timing';
export type FeedbackItem = { id: string; category: FeedbackCategory; strokes: StrokeName[]; en: string; nl: string };
export const feedbackCategories: FeedbackCategory[] = ['arms','legs','body','breathing','timing'];
export const feedbackItems: FeedbackItem[] = [
  {
    "id": "freestyle-arms-1",
    "en": "Enter hands in line with shoulders",
    "nl": "Plaats de handen in lijn met de schouders",
    "category": "body",
    "strokes": [
      "Freestyle"
    ]
  },
  {
    "id": "freestyle-arms-2",
    "en": "Reach forward without crossing the centre line",
    "nl": "Strek naar voren zonder de middellijn te kruisen",
    "category": "arms",
    "strokes": [
      "Freestyle"
    ]
  },
  {
    "id": "freestyle-arms-3",
    "en": "Keep the elbow high during the underwater catch",
    "nl": "Houd de elleboog hoog tijdens de onderwaterfase",
    "category": "arms",
    "strokes": [
      "Freestyle"
    ]
  },
  {
    "id": "freestyle-arms-4",
    "en": "Push water back towards the feet",
    "nl": "Duw het water naar achteren richting de voeten",
    "category": "arms",
    "strokes": [
      "Freestyle"
    ]
  },
  {
    "id": "freestyle-arms-5",
    "en": "Relax the recovering arm",
    "nl": "Ontspan de arm tijdens de overhaalfase",
    "category": "arms",
    "strokes": [
      "Freestyle"
    ]
  },
  {
    "id": "freestyle-arms-6",
    "en": "Rotate the body with each stroke",
    "nl": "Draai de romp mee met elke armslag",
    "category": "timing",
    "strokes": [
      "Freestyle"
    ]
  },
  {
    "id": "freestyle-arms-7",
    "en": "Keep the head steady between breaths",
    "nl": "Houd het hoofd stil tussen ademhalingen",
    "category": "breathing",
    "strokes": [
      "Freestyle"
    ]
  },
  {
    "id": "freestyle-arms-8",
    "en": "Breathe to the side without lifting the head",
    "nl": "Adem zijwaarts zonder het hoofd op te tillen",
    "category": "breathing",
    "strokes": [
      "Freestyle"
    ]
  },
  {
    "id": "freestyle-arms-9",
    "en": "Exhale steadily underwater",
    "nl": "Adem rustig en voortdurend uit onder water",
    "category": "breathing",
    "strokes": [
      "Freestyle"
    ]
  },
  {
    "id": "freestyle-arms-10",
    "en": "Maintain a consistent arm rhythm",
    "nl": "Houd een gelijkmatig armritme aan",
    "category": "timing",
    "strokes": [
      "Freestyle"
    ]
  },
  {
    "id": "freestyle-legs-1",
    "en": "Kick from the hips, not mainly the knees",
    "nl": "Trap vanuit de heupen, niet vooral vanuit de knieën",
    "category": "legs",
    "strokes": [
      "Freestyle"
    ]
  },
  {
    "id": "freestyle-legs-2",
    "en": "Keep ankles relaxed and toes pointed",
    "nl": "Houd de enkels ontspannen en de tenen gestrekt",
    "category": "legs",
    "strokes": [
      "Freestyle"
    ]
  },
  {
    "id": "freestyle-legs-3",
    "en": "Use smaller, continuous flutter kicks",
    "nl": "Maak kleinere, doorgaande beenslagen",
    "category": "timing",
    "strokes": [
      "Freestyle"
    ]
  },
  {
    "id": "freestyle-legs-4",
    "en": "Keep the legs near the surface",
    "nl": "Houd de benen dicht bij het wateroppervlak",
    "category": "breathing",
    "strokes": [
      "Freestyle"
    ]
  },
  {
    "id": "freestyle-legs-5",
    "en": "Keep the kick steady while breathing",
    "nl": "Houd de beenslag gelijkmatig tijdens het ademen",
    "category": "breathing",
    "strokes": [
      "Freestyle"
    ]
  },
  {
    "id": "freestyle-legs-6",
    "en": "Maintain a long, streamlined body position",
    "nl": "Houd het lichaam lang en gestroomlijnd",
    "category": "body",
    "strokes": [
      "Freestyle"
    ]
  },
  {
    "id": "backstroke-arms-1",
    "en": "Enter the water little finger first",
    "nl": "Steek de hand met de pink eerst in het water",
    "category": "arms",
    "strokes": [
      "Backstroke"
    ]
  },
  {
    "id": "backstroke-arms-2",
    "en": "Keep the recovering arm extended and relaxed",
    "nl": "Houd de overhalende arm gestrekt en ontspannen",
    "category": "arms",
    "strokes": [
      "Backstroke"
    ]
  },
  {
    "id": "backstroke-arms-3",
    "en": "Rotate shoulders with each arm stroke",
    "nl": "Draai de schouders mee met elke armslag",
    "category": "timing",
    "strokes": [
      "Backstroke"
    ]
  },
  {
    "id": "backstroke-arms-4",
    "en": "Pull water towards the feet",
    "nl": "Duw het water onder water richting de voeten",
    "category": "arms",
    "strokes": [
      "Backstroke"
    ]
  },
  {
    "id": "backstroke-arms-5",
    "en": "Avoid crossing the centre line on entry",
    "nl": "Kruis de middellijn niet bij het insteken",
    "category": "arms",
    "strokes": [
      "Backstroke"
    ]
  },
  {
    "id": "backstroke-arms-6",
    "en": "Keep arm strokes alternating smoothly",
    "nl": "Wissel de armslagen vloeiend af",
    "category": "timing",
    "strokes": [
      "Backstroke"
    ]
  },
  {
    "id": "backstroke-arms-7",
    "en": "Keep the head still and eyes upward",
    "nl": "Houd het hoofd stil en kijk omhoog",
    "category": "breathing",
    "strokes": [
      "Backstroke"
    ]
  },
  {
    "id": "backstroke-arms-8",
    "en": "Finish the underwater push by the hip",
    "nl": "Maak de onderwaterduw af bij de heup",
    "category": "body",
    "strokes": [
      "Backstroke"
    ]
  },
  {
    "id": "backstroke-legs-1",
    "en": "Kick from the hips with relaxed ankles",
    "nl": "Trap vanuit de heupen met ontspannen enkels",
    "category": "legs",
    "strokes": [
      "Backstroke"
    ]
  },
  {
    "id": "backstroke-legs-2",
    "en": "Keep knees mostly below the surface",
    "nl": "Houd de knieën grotendeels onder water",
    "category": "breathing",
    "strokes": [
      "Backstroke"
    ]
  },
  {
    "id": "backstroke-legs-3",
    "en": "Maintain a small continuous flutter kick",
    "nl": "Houd een kleine, doorgaande beenslag aan",
    "category": "timing",
    "strokes": [
      "Backstroke"
    ]
  },
  {
    "id": "backstroke-legs-4",
    "en": "Keep hips high near the surface",
    "nl": "Houd de heupen hoog bij het oppervlak",
    "category": "breathing",
    "strokes": [
      "Backstroke"
    ]
  },
  {
    "id": "backstroke-legs-5",
    "en": "Keep the body long and balanced",
    "nl": "Houd het lichaam lang en in balans",
    "category": "body",
    "strokes": [
      "Backstroke"
    ]
  },
  {
    "id": "backstroke-legs-6",
    "en": "Maintain kick rhythm during rotation",
    "nl": "Behoud het beenritme tijdens de romprotatie",
    "category": "timing",
    "strokes": [
      "Backstroke"
    ]
  },
  {
    "id": "breaststroke-arms-1",
    "en": "Sweep hands outward then inward smoothly",
    "nl": "Beweeg de handen vloeiend naar buiten en weer naar binnen",
    "category": "arms",
    "strokes": [
      "Breaststroke"
    ]
  },
  {
    "id": "breaststroke-arms-2",
    "en": "Keep elbows in front of the shoulders during the pull",
    "nl": "Houd de ellebogen tijdens de trek voor de schouders",
    "category": "body",
    "strokes": [
      "Breaststroke"
    ]
  },
  {
    "id": "breaststroke-arms-3",
    "en": "Avoid pulling hands too far back",
    "nl": "Trek de handen niet te ver naar achteren",
    "category": "arms",
    "strokes": [
      "Breaststroke"
    ]
  },
  {
    "id": "breaststroke-arms-4",
    "en": "Recover hands forward together",
    "nl": "Breng beide handen tegelijk naar voren",
    "category": "arms",
    "strokes": [
      "Breaststroke"
    ]
  },
  {
    "id": "breaststroke-arms-5",
    "en": "Stretch forward into a streamlined glide",
    "nl": "Strek naar voren voor een gestroomlijnde glijfase",
    "category": "body",
    "strokes": [
      "Breaststroke"
    ]
  },
  {
    "id": "breaststroke-arms-6",
    "en": "Lift to breathe without excessive head movement",
    "nl": "Adem in zonder het hoofd te ver op te tillen",
    "category": "breathing",
    "strokes": [
      "Breaststroke"
    ]
  },
  {
    "id": "breaststroke-arms-7",
    "en": "Coordinate pull, breath, kick and glide",
    "nl": "Stem trek, ademhaling, beenslag en glijfase op elkaar af",
    "category": "breathing",
    "strokes": [
      "Breaststroke"
    ]
  },
  {
    "id": "breaststroke-arms-8",
    "en": "Keep arm movements symmetrical",
    "nl": "Houd de armbewegingen symmetrisch",
    "category": "arms",
    "strokes": [
      "Breaststroke"
    ]
  },
  {
    "id": "breaststroke-legs-1",
    "en": "Draw heels towards the seat before kicking",
    "nl": "Breng de hielen richting de billen vóór de beenslag",
    "category": "legs",
    "strokes": [
      "Breaststroke"
    ]
  },
  {
    "id": "breaststroke-legs-2",
    "en": "Turn feet outward before the propulsive kick",
    "nl": "Draai de voeten naar buiten vóór de stuwfase",
    "category": "legs",
    "strokes": [
      "Breaststroke"
    ]
  },
  {
    "id": "breaststroke-legs-3",
    "en": "Kick backward with both legs together",
    "nl": "Trap met beide benen tegelijk naar achteren",
    "category": "legs",
    "strokes": [
      "Breaststroke"
    ]
  },
  {
    "id": "breaststroke-legs-4",
    "en": "Finish with legs together and extended",
    "nl": "Sluit en strek de benen na de beenslag",
    "category": "legs",
    "strokes": [
      "Breaststroke"
    ]
  },
  {
    "id": "breaststroke-legs-5",
    "en": "Avoid excessively wide knees",
    "nl": "Spreid de knieën niet te ver",
    "category": "legs",
    "strokes": [
      "Breaststroke"
    ]
  },
  {
    "id": "breaststroke-legs-6",
    "en": "Time the kick after the arm recovery",
    "nl": "Zet de beenslag in na het naar voren brengen van de armen",
    "category": "timing",
    "strokes": [
      "Breaststroke"
    ]
  },
  {
    "id": "breaststroke-legs-7",
    "en": "Hold a short streamlined glide",
    "nl": "Houd een korte gestroomlijnde glijfase aan",
    "category": "body",
    "strokes": [
      "Breaststroke"
    ]
  },
  {
    "id": "breaststroke-legs-8",
    "en": "Keep the kick symmetrical",
    "nl": "Houd de beenslag symmetrisch",
    "category": "legs",
    "strokes": [
      "Breaststroke"
    ]
  },
  {
    "id": "butterfly-arms-1",
    "en": "Enter both hands together near shoulder width",
    "nl": "Steek beide handen tegelijk in op schouderbreedte",
    "category": "body",
    "strokes": [
      "Butterfly"
    ]
  },
  {
    "id": "butterfly-arms-2",
    "en": "Keep the arm action symmetrical",
    "nl": "Houd de armbeweging symmetrisch",
    "category": "arms",
    "strokes": [
      "Butterfly"
    ]
  },
  {
    "id": "butterfly-arms-3",
    "en": "Catch water without pressing too deep",
    "nl": "Pak water zonder de handen te diep te brengen",
    "category": "arms",
    "strokes": [
      "Butterfly"
    ]
  },
  {
    "id": "butterfly-arms-4",
    "en": "Push through to the hips before recovery",
    "nl": "Duw door tot de heupen vóór de overhaal",
    "category": "body",
    "strokes": [
      "Butterfly"
    ]
  },
  {
    "id": "butterfly-arms-5",
    "en": "Recover both arms low and relaxed",
    "nl": "Breng beide armen laag en ontspannen over",
    "category": "arms",
    "strokes": [
      "Butterfly"
    ]
  },
  {
    "id": "butterfly-arms-6",
    "en": "Return the face to the water promptly after breathing",
    "nl": "Breng het gezicht na het ademen snel terug in het water",
    "category": "breathing",
    "strokes": [
      "Butterfly"
    ]
  },
  {
    "id": "butterfly-arms-7",
    "en": "Avoid lifting the head too high to breathe",
    "nl": "Til het hoofd niet te hoog op om te ademen",
    "category": "breathing",
    "strokes": [
      "Butterfly"
    ]
  },
  {
    "id": "butterfly-arms-8",
    "en": "Coordinate arm pull and body rhythm",
    "nl": "Stem de armtrek af op het lichaamsritme",
    "category": "timing",
    "strokes": [
      "Butterfly"
    ]
  },
  {
    "id": "butterfly-legs-1",
    "en": "Keep legs together during the dolphin kick",
    "nl": "Houd de benen bij elkaar tijdens de dolfijnbeenslag",
    "category": "legs",
    "strokes": [
      "Butterfly"
    ]
  },
  {
    "id": "butterfly-legs-2",
    "en": "Start the wave from the chest and hips",
    "nl": "Begin de golfbeweging vanuit borst en heupen",
    "category": "legs",
    "strokes": [
      "Butterfly"
    ]
  },
  {
    "id": "butterfly-legs-3",
    "en": "Avoid excessive knee bending",
    "nl": "Buig de knieën niet te ver",
    "category": "legs",
    "strokes": [
      "Butterfly"
    ]
  },
  {
    "id": "butterfly-legs-4",
    "en": "Use two kicks per arm cycle",
    "nl": "Maak twee beenslagen per armcyclus",
    "category": "timing",
    "strokes": [
      "Butterfly"
    ]
  },
  {
    "id": "butterfly-legs-5",
    "en": "Time the second kick with the arm push",
    "nl": "Laat de tweede beenslag samenvallen met de armduw",
    "category": "timing",
    "strokes": [
      "Butterfly"
    ]
  },
  {
    "id": "butterfly-legs-6",
    "en": "Keep the body moving forward rather than bouncing up",
    "nl": "Beweeg vooral naar voren in plaats van op en neer",
    "category": "body",
    "strokes": [
      "Butterfly"
    ]
  },
  {
    "id": "butterfly-legs-7",
    "en": "Maintain a smooth, continuous body wave",
    "nl": "Houd een vloeiende, doorgaande golfbeweging aan",
    "category": "timing",
    "strokes": [
      "Butterfly"
    ]
  },
  {
    "id": "shared-body-streamline",
    "category": "body",
    "strokes": [
      "Freestyle",
      "Backstroke",
      "Breaststroke",
      "Butterfly"
    ],
    "en": "Maintain a long, aligned body position",
    "nl": "Houd het lichaam lang en goed uitgelijnd"
  },
  {
    "id": "shared-timing-consistency",
    "category": "timing",
    "strokes": [
      "Freestyle",
      "Backstroke",
      "Breaststroke",
      "Butterfly"
    ],
    "en": "Keep a repeatable stroke rhythm across the length",
    "nl": "Houd een herhaalbaar slagritme aan over de hele baan"
  },
  {
    "id": "shared-breathing-relaxed",
    "category": "breathing",
    "strokes": [
      "Freestyle",
      "Backstroke",
      "Breaststroke",
      "Butterfly"
    ],
    "en": "Keep breathing relaxed and controlled",
    "nl": "Houd de ademhaling ontspannen en gecontroleerd"
  },
  {
    "id": "shared-body-wall",
    "category": "body",
    "strokes": [
      "Freestyle",
      "Backstroke",
      "Breaststroke",
      "Butterfly"
    ],
    "en": "Push off the wall in a streamlined position",
    "nl": "Zet je gestroomlijnd af van de muur"
  },
  {
    "id": "shared-arms-symmetry",
    "category": "arms",
    "strokes": [
      "Breaststroke",
      "Butterfly"
    ],
    "en": "Move both arms symmetrically",
    "nl": "Beweeg beide armen symmetrisch"
  },
  {
    "id": "shared-legs-flutter",
    "category": "legs",
    "strokes": [
      "Freestyle",
      "Backstroke"
    ],
    "en": "Keep the flutter kick small and continuous",
    "nl": "Houd de beenslag klein en doorgaand"
  },
  {
    "id": "shared-timing-breath",
    "category": "timing",
    "strokes": [
      "Freestyle",
      "Breaststroke",
      "Butterfly"
    ],
    "en": "Coordinate breathing with the stroke rhythm",
    "nl": "Stem de ademhaling af op het slagritme"
  },
  {
    "id": "shared-body-rotation",
    "category": "body",
    "strokes": [
      "Freestyle",
      "Backstroke"
    ],
    "en": "Rotate the body smoothly around its long axis",
    "nl": "Draai het lichaam vloeiend om de lengteas"
  }
];
export function feedbackFor(stroke: StrokeName, category: FeedbackCategory): FeedbackItem[] { return feedbackItems.filter(item => item.category === category && item.strokes.includes(stroke)); }
export function feedbackById(id: string): FeedbackItem | undefined { return feedbackItems.find(item => item.id === id); }
