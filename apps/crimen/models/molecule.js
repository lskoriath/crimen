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

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Crimen.Molecule = SC.Record.extend(
/** @scope Crimen.Molecule.prototype */ {

  name: SC.Record.attr(String),
  description: SC.Record.attr(String),
  atom: SC.Record.toMany("Crimen.Atom", { 
    inverse: "molecule", isMaster: YES 
    }),
  atomsCount: function() {
    return this.get('atom').get('length');
    }.property('atom').cacheable(),
  icon: 'http://koriath.jura.uni-saarland.de/bereitgestellt/molecule.png',
}) ;