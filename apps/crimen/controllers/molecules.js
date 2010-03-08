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
/** @scope Crimen.moleculesController.prototype */
{

    addMolecule: function() {
        var molecule;

        // create a new molecule in the store
        molecule = Crimen.store.createRecord(Crimen.Molecule, {
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
    },

//binds the welcome-message to the var headingContent, used in the function below. 
//You find the Header in crimenToolbarHeading.
headingContent: "_Welcome to Crimen".loc(),

    showMoleculeContent: function() {
	
			///some tryout to convert the given array-id into single values
			///var selectedMolecule = array.objectAt('selectedMoleculeArray');
			
			////a more complicated way to solve this
			////var guidOfSelectedMolecule = selectedMolecule.getPath('firstObject.guid');
			////var moleculeRecord = Crimen.store.find(Crimen.Molecule, guidOfSelectedMolecule);
			/////Crimen.atomsController.set('content', selectedMolecule);
			
        	/////Here we should fetch the current selection,
        	/////create a query on the loaded data of molecules regarding the resprective atoms, and
        	/////set the content of the main GridView to the result of the query.

			//select the name out of the molecules
			var selectedMolecule = this.getPath('selection.firstObject.name');
			
			//sets the header to the name of the molecule
			this.set('headingContent', selectedMolecule);


        

    }

});
