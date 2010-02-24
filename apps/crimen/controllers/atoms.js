// ==========================================================================
// Project:   Crimen.atomsController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
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
