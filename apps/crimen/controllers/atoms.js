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
Crimen.atomsController = SC.ArrayController.create(
/** @scope Crimen.atomsController.prototype */ {

  addAtom: function() {
    var atom;
 
    // create a new atom in the store
    atom = Crimen.store.createRecord(Crimen.Atom, {
      "name": "New Topic", 
      "type": "html",
      "description": "This describes the crimen topic"
    });
 
    // select new atom in UI
    this.selectObject(atom);
 
    // activate inline editor once UI can repaint
    this.invokeLater(function() {
      var contentIndex = this.indexOf(atom);
      var list = Crimen.mainPage.getPath('mainPane.crimenMaincontent.topLeftView.crimenSidebarList.contentView');
      var listItem = list.itemViewForContentIndex(contentIndex);
      listItem.beginEditing();
    });
 
    return YES;
  }

}) ;
