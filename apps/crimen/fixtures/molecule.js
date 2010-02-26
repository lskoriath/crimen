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

sc_require('models/molecule');

Crimen.Molecule.FIXTURES = [

//Some predefinied fixtures
{
    guid: 1,
    name: "Zurechnung",
    description: "Alles, was zur Zurechnung gehört",
    atom: ['1', '2', '3', '4', '5']
},

{
    guid: 2,
    name: "Dreigliedriger Deliktsaufbau",
    description: "Welzel at its best",
    atom: ['1', '2', '3', '4']
},

{
    guid: 3,
    name: "Kausalität",
    description: "A impliziert B",
    atom: ['1', '2']
},

{
    guid: 4,
    name: "Äquivalenztheorie",
    description: "Soltan, der Spontane",
    atom: ['2']
}

];
