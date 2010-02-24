// ==========================================================================
// Project:   Crimen.Molecule
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
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
    })

}) ;
