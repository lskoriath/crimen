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

// This page describes the main user interface for your application.  
Crimen.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'labelView'.w(),
    
    labelView: SC.LabelView.design({
      layout: { centerX: 0, centerY: 0, width: 200, height: 18 },
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1", 
      value: "Welcome to SproutCore!"
    })
  })

});
