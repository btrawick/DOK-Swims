export type StrokeName = 'Freestyle' | 'Backstroke' | 'Breaststroke' | 'Butterfly';
export type Language = 'en' | 'nl';
export type FeedbackArea = 'arms' | 'legs';
export type FeedbackItem = { id: string; en: string; nl: string };
export const feedbackLibrary: Record<StrokeName, Record<FeedbackArea, FeedbackItem[]>> = {
  "Freestyle": {
    "arms": [
      {
        "id": "freestyle-arms-1",
        "en": "Enter hands in line with shoulders",
        "nl": "Plaats de handen in lijn met de schouders"
      },
      {
        "id": "freestyle-arms-2",
        "en": "Reach forward without crossing the centre line",
        "nl": "Strek naar voren zonder de middellijn te kruisen"
      },
      {
        "id": "freestyle-arms-3",
        "en": "Keep the elbow high during the underwater catch",
        "nl": "Houd de elleboog hoog tijdens de onderwaterfase"
      },
      {
        "id": "freestyle-arms-4",
        "en": "Push water back towards the feet",
        "nl": "Duw het water naar achteren richting de voeten"
      },
      {
        "id": "freestyle-arms-5",
        "en": "Relax the recovering arm",
        "nl": "Ontspan de arm tijdens de overhaalfase"
      },
      {
        "id": "freestyle-arms-6",
        "en": "Rotate the body with each stroke",
        "nl": "Draai de romp mee met elke armslag"
      },
      {
        "id": "freestyle-arms-7",
        "en": "Keep the head steady between breaths",
        "nl": "Houd het hoofd stil tussen ademhalingen"
      },
      {
        "id": "freestyle-arms-8",
        "en": "Breathe to the side without lifting the head",
        "nl": "Adem zijwaarts zonder het hoofd op te tillen"
      },
      {
        "id": "freestyle-arms-9",
        "en": "Exhale steadily underwater",
        "nl": "Adem rustig en voortdurend uit onder water"
      },
      {
        "id": "freestyle-arms-10",
        "en": "Maintain a consistent arm rhythm",
        "nl": "Houd een gelijkmatig armritme aan"
      }
    ],
    "legs": [
      {
        "id": "freestyle-legs-1",
        "en": "Kick from the hips, not mainly the knees",
        "nl": "Trap vanuit de heupen, niet vooral vanuit de knieën"
      },
      {
        "id": "freestyle-legs-2",
        "en": "Keep ankles relaxed and toes pointed",
        "nl": "Houd de enkels ontspannen en de tenen gestrekt"
      },
      {
        "id": "freestyle-legs-3",
        "en": "Use smaller, continuous flutter kicks",
        "nl": "Maak kleinere, doorgaande beenslagen"
      },
      {
        "id": "freestyle-legs-4",
        "en": "Keep the legs near the surface",
        "nl": "Houd de benen dicht bij het wateroppervlak"
      },
      {
        "id": "freestyle-legs-5",
        "en": "Keep the kick steady while breathing",
        "nl": "Houd de beenslag gelijkmatig tijdens het ademen"
      },
      {
        "id": "freestyle-legs-6",
        "en": "Maintain a long, streamlined body position",
        "nl": "Houd het lichaam lang en gestroomlijnd"
      }
    ]
  },
  "Backstroke": {
    "arms": [
      {
        "id": "backstroke-arms-1",
        "en": "Enter the water little finger first",
        "nl": "Steek de hand met de pink eerst in het water"
      },
      {
        "id": "backstroke-arms-2",
        "en": "Keep the recovering arm extended and relaxed",
        "nl": "Houd de overhalende arm gestrekt en ontspannen"
      },
      {
        "id": "backstroke-arms-3",
        "en": "Rotate shoulders with each arm stroke",
        "nl": "Draai de schouders mee met elke armslag"
      },
      {
        "id": "backstroke-arms-4",
        "en": "Pull water towards the feet",
        "nl": "Duw het water onder water richting de voeten"
      },
      {
        "id": "backstroke-arms-5",
        "en": "Avoid crossing the centre line on entry",
        "nl": "Kruis de middellijn niet bij het insteken"
      },
      {
        "id": "backstroke-arms-6",
        "en": "Keep arm strokes alternating smoothly",
        "nl": "Wissel de armslagen vloeiend af"
      },
      {
        "id": "backstroke-arms-7",
        "en": "Keep the head still and eyes upward",
        "nl": "Houd het hoofd stil en kijk omhoog"
      },
      {
        "id": "backstroke-arms-8",
        "en": "Finish the underwater push by the hip",
        "nl": "Maak de onderwaterduw af bij de heup"
      }
    ],
    "legs": [
      {
        "id": "backstroke-legs-1",
        "en": "Kick from the hips with relaxed ankles",
        "nl": "Trap vanuit de heupen met ontspannen enkels"
      },
      {
        "id": "backstroke-legs-2",
        "en": "Keep knees mostly below the surface",
        "nl": "Houd de knieën grotendeels onder water"
      },
      {
        "id": "backstroke-legs-3",
        "en": "Maintain a small continuous flutter kick",
        "nl": "Houd een kleine, doorgaande beenslag aan"
      },
      {
        "id": "backstroke-legs-4",
        "en": "Keep hips high near the surface",
        "nl": "Houd de heupen hoog bij het oppervlak"
      },
      {
        "id": "backstroke-legs-5",
        "en": "Keep the body long and balanced",
        "nl": "Houd het lichaam lang en in balans"
      },
      {
        "id": "backstroke-legs-6",
        "en": "Maintain kick rhythm during rotation",
        "nl": "Behoud het beenritme tijdens de romprotatie"
      }
    ]
  },
  "Breaststroke": {
    "arms": [
      {
        "id": "breaststroke-arms-1",
        "en": "Sweep hands outward then inward smoothly",
        "nl": "Beweeg de handen vloeiend naar buiten en weer naar binnen"
      },
      {
        "id": "breaststroke-arms-2",
        "en": "Keep elbows in front of the shoulders during the pull",
        "nl": "Houd de ellebogen tijdens de trek voor de schouders"
      },
      {
        "id": "breaststroke-arms-3",
        "en": "Avoid pulling hands too far back",
        "nl": "Trek de handen niet te ver naar achteren"
      },
      {
        "id": "breaststroke-arms-4",
        "en": "Recover hands forward together",
        "nl": "Breng beide handen tegelijk naar voren"
      },
      {
        "id": "breaststroke-arms-5",
        "en": "Stretch forward into a streamlined glide",
        "nl": "Strek naar voren voor een gestroomlijnde glijfase"
      },
      {
        "id": "breaststroke-arms-6",
        "en": "Lift to breathe without excessive head movement",
        "nl": "Adem in zonder het hoofd te ver op te tillen"
      },
      {
        "id": "breaststroke-arms-7",
        "en": "Coordinate pull, breath, kick and glide",
        "nl": "Stem trek, ademhaling, beenslag en glijfase op elkaar af"
      },
      {
        "id": "breaststroke-arms-8",
        "en": "Keep arm movements symmetrical",
        "nl": "Houd de armbewegingen symmetrisch"
      }
    ],
    "legs": [
      {
        "id": "breaststroke-legs-1",
        "en": "Draw heels towards the seat before kicking",
        "nl": "Breng de hielen richting de billen vóór de beenslag"
      },
      {
        "id": "breaststroke-legs-2",
        "en": "Turn feet outward before the propulsive kick",
        "nl": "Draai de voeten naar buiten vóór de stuwfase"
      },
      {
        "id": "breaststroke-legs-3",
        "en": "Kick backward with both legs together",
        "nl": "Trap met beide benen tegelijk naar achteren"
      },
      {
        "id": "breaststroke-legs-4",
        "en": "Finish with legs together and extended",
        "nl": "Sluit en strek de benen na de beenslag"
      },
      {
        "id": "breaststroke-legs-5",
        "en": "Avoid excessively wide knees",
        "nl": "Spreid de knieën niet te ver"
      },
      {
        "id": "breaststroke-legs-6",
        "en": "Time the kick after the arm recovery",
        "nl": "Zet de beenslag in na het naar voren brengen van de armen"
      },
      {
        "id": "breaststroke-legs-7",
        "en": "Hold a short streamlined glide",
        "nl": "Houd een korte gestroomlijnde glijfase aan"
      },
      {
        "id": "breaststroke-legs-8",
        "en": "Keep the kick symmetrical",
        "nl": "Houd de beenslag symmetrisch"
      }
    ]
  },
  "Butterfly": {
    "arms": [
      {
        "id": "butterfly-arms-1",
        "en": "Enter both hands together near shoulder width",
        "nl": "Steek beide handen tegelijk in op schouderbreedte"
      },
      {
        "id": "butterfly-arms-2",
        "en": "Keep the arm action symmetrical",
        "nl": "Houd de armbeweging symmetrisch"
      },
      {
        "id": "butterfly-arms-3",
        "en": "Catch water without pressing too deep",
        "nl": "Pak water zonder de handen te diep te brengen"
      },
      {
        "id": "butterfly-arms-4",
        "en": "Push through to the hips before recovery",
        "nl": "Duw door tot de heupen vóór de overhaal"
      },
      {
        "id": "butterfly-arms-5",
        "en": "Recover both arms low and relaxed",
        "nl": "Breng beide armen laag en ontspannen over"
      },
      {
        "id": "butterfly-arms-6",
        "en": "Return the face to the water promptly after breathing",
        "nl": "Breng het gezicht na het ademen snel terug in het water"
      },
      {
        "id": "butterfly-arms-7",
        "en": "Avoid lifting the head too high to breathe",
        "nl": "Til het hoofd niet te hoog op om te ademen"
      },
      {
        "id": "butterfly-arms-8",
        "en": "Coordinate arm pull and body rhythm",
        "nl": "Stem de armtrek af op het lichaamsritme"
      }
    ],
    "legs": [
      {
        "id": "butterfly-legs-1",
        "en": "Keep legs together during the dolphin kick",
        "nl": "Houd de benen bij elkaar tijdens de dolfijnbeenslag"
      },
      {
        "id": "butterfly-legs-2",
        "en": "Start the wave from the chest and hips",
        "nl": "Begin de golfbeweging vanuit borst en heupen"
      },
      {
        "id": "butterfly-legs-3",
        "en": "Avoid excessive knee bending",
        "nl": "Buig de knieën niet te ver"
      },
      {
        "id": "butterfly-legs-4",
        "en": "Use two kicks per arm cycle",
        "nl": "Maak twee beenslagen per armcyclus"
      },
      {
        "id": "butterfly-legs-5",
        "en": "Time the second kick with the arm push",
        "nl": "Laat de tweede beenslag samenvallen met de armduw"
      },
      {
        "id": "butterfly-legs-6",
        "en": "Keep the body moving forward rather than bouncing up",
        "nl": "Beweeg vooral naar voren in plaats van op en neer"
      },
      {
        "id": "butterfly-legs-7",
        "en": "Maintain a smooth, continuous body wave",
        "nl": "Houd een vloeiende, doorgaande golfbeweging aan"
      }
    ]
  }
};
