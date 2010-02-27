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
  
  	currentContainerView: function () {
	  return Crimen.getPath('mainViews.crimenContainerOverviewGrid');
	  }.property()
	
  });
