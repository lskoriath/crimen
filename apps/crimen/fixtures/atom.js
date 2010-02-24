// =============================================================================
// Project:   Crimen - Eine konstruktivistische Lernplattform für das Strafrecht
// Copyright: 2010 Universität des Saarlandes, Lehrstuhl Prof. Dr. Heinz Koriath

// This file is part of crimen.

//    crimen is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.

//    crimen is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.

//    You should have received a copy of the GNU General Public License
//    along with crimen.  If not, see <http://www.gnu.org/licenses/>.
// =============================================================================
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
