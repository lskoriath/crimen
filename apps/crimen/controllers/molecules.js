// ==========================================================================
// Project:   Crimen.moleculesController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
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
