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

  Atom has three properties: name, type and description. It should be extended with some kind of content container.

  @extends SC.Record
  @version 0.1
*/
Crimen.Atom = SC.Record.extend(
/** @scope Crimen.Atom.prototype */
{
	
	//defines the propertys of an atom. An atom can contain a name, a type, a descripton and the atoms it's related to.
    name: SC.Record.attr(String),
    type: SC.Record.attr(String),
    description: SC.Record.attr(String),
    molecule: SC.Record.toMany("Crimen.Molecule", {
        inverse: "atom",
        isMaster: NO
    })

});
