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

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Crimen.moleculesController = SC.ArrayController.create(
/** @scope Crimen.moleculesController.prototype */ {

  addMolecule: function() {
    var molecule;
 
    // create a new molecule in the store
    molecules = Crimen.store.createRecord(Crimen.Molecule, {
      "name": "New Molecule", 
      "description": "This describes the molecule"
    });
 
    // select new molecule in UI
    this.selectObject(molecule);
 
    // activate inline editor once UI can repaint
    this.invokeLater(function() {
      var contentIndex = this.indexOf(molecule);
      var list = Crimen.mainPage.getPath('mainPane.crimenMaincontent.topLeftView.crimenSidebarList.contentView');
      var listItem = list.itemViewForContentIndex(contentIndex);
      listItem.beginEditing();
    });
 
    return YES;
  }

}) ;
