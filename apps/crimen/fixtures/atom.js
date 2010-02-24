// ==========================================================================
// Project:   Crimen.Atom Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Crimen */

sc_require('models/atom');

Crimen.Atom.FIXTURES = [

  //Some predefinied fixtures

   { guid: 1,
     name: "Kauslität",
     type: "html",
     description: "Eine kurze Beschreibung der Kauslität",
     molecule: ['1','2','3'] },
  
  { guid: 2,
     name: "Objektive Zurechnung",
     type: "html",
     description: "Was bedeutet objektive Zurechnung",
     molecule: ['1','2','3'] },
     
  { guid: 3,
     name: "Vorsatz",
     type: "html",
     description: "Wer bin ich und was will ich?",
     molecule: ['1','2'] },
     
  { guid: 4,
     name: "Notwehr",
     type: "html",
     description: "Mach Dich vom Acker, oder ich schlage Dir den Schädel ein.",
     molecule: ['1','2'] },
  
  { guid: 5,
     name: "Notstand",
     type: "html",
     description: "I take a whiskey drink, I take a vodka drink…",
     molecule: ['1'] }

];
