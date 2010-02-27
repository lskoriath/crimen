// ==========================================================================
// Project:   Crimen.appController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Crimen */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Crimen.appController = SC.ObjectController.create(
/** @scope Crimen.appController.prototype */ {
  
  // ..........................................................
  // This function sets the content of the container on the right side of the split view. 
  // It has to be completely rewritten, as we want to switch between single atoms and overviews.

  	currentContainerView: function () {
	  return Crimen.getPath('mainViews.crimenContainerOverviewGrid');
	  }.property(),
	
  });
