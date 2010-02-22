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
    childViews: 'crimenMaincontent crimenToolbar'.w(),
    
    crimenToolbar: SC.ToolbarView.design({
      layout: { top: 0, left: 0, right: 0, height: 36 },
      childViews: 'crimenToolbarHeading crimenToolbarLogoutButton'.w(),
      anchorLocation: SC.ANCHOR_TOP,
      crimenToolbarHeading: SC.LabelView.design({
        layout: { centerX: 0, centerY: 0, height: 24, width: 200 },
        controlSize: SC.LARGE_CONTROL_SIZE,
        fontWeight: SC.BOLD_WEIGHT,
        value:   'Welcome to Crimen'
      }),
      
      crimenToolbarLogoutButton: SC.ButtonView.design({
      	layout: { centerY: 0, height: 24, right: 12, width: 100 },
        title:  "Logout"
      })
    }),
    
    crimenMaincontent: SC.ScrollView.design({
      hasHorizontalScroller: NO,
      layout: { top: 36, bottom: 0, left: 0, right: 0 },
      backgroundColor: 'white',
 
      contentView: SC.ListView.design({
      })
    })
  }) 
});
