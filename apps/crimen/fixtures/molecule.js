// ==========================================================================
// Project:   Crimen.Molecule Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Crimen */

sc_require('models/molecule');

Crimen.Molecule.FIXTURES = [

  //Some predefinied fixtures

   { guid: 1,
     name: "Zurechnung",
     description: "Alles, was zur Zurechnung gehört",
     atom: ['1','2','3','4','5'] },
  
  { guid: 2,
     name: "Dreigliedriger Deliktsaufbau",
     description: "Welzel at its best",
     atom: ['1','2','3','4']  },
     
  { guid: 3,
     name: "Kausalität",
     description: "A impliziert B",
     atom: ['1','2']  },
     
  { guid: 4,
     name: "Äquivalenztheorie",
     description: "Soltan, der Spontane",
     atom: ['2']  }

];
