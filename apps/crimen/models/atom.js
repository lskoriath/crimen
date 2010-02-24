// ==========================================================================
// Project:   Crimen.Atom
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Crimen */

/** @class

  Atom has three properties: name, type and description. It should be extended with some kind of content container.

  @extends SC.Record
  @version 0.1
*/
Crimen.Atom = SC.Record.extend(
/** @scope Crimen.Atom.prototype */ {

  name: SC.Record.attr(String),
  type: SC.Record.attr(String),
  description: SC.Record.attr(String)

}) ;
