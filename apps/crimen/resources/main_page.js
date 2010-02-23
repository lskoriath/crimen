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
    classNames: "crimen",
  
  //Two childViews in the MainPane: Maincontent and Toolbar
    childViews: 'crimenMaincontent crimenToolbar'.w(),
    
    crimenToolbar: SC.ToolbarView.design({
      layout: { top: 0, left: 0, right: 0, height: 36 }, //Toolbar height set to 36px
      childViews: 'crimenToolbarHeading crimenToolbarLogoutButton'.w(), //has a heading and a button
      anchorLocation: SC.ANCHOR_TOP, //sits on top
      crimenToolbarHeading: SC.LabelView.design({
        layout: { centerX: 0, centerY: 0, height: 24, width: 300 },
        controlSize: SC.LARGE_CONTROL_SIZE,
        fontWeight: SC.BOLD_WEIGHT,
        value:   "_Welcome to Crimen".loc()
      }),
      
      crimenToolbarLogoutButton: SC.ButtonView.design({
      	layout: { centerY: 0, height: 24, right: 12, width: 100 },
        title:  "_Logout".loc()
      })
    }),
    
    crimenMaincontent: SC.SplitView.design({
      layout: { top: 36, bottom: 0, left: 0, right: 0 },
      backgroundColor: 'white',
      defaultThickness: 200,
 
      topLeftView: SC.View.design({
      
        layout: { minWidth: 100 },
        childViews: 'crimenSidebarList crimenSidebarButtons'.w(), //Has the list of entries and the buttons at the bottom
      
          crimenSidebarList: SC.ScrollView.design({
        
          hasHorizontalScroller: NO, // disable horizontal scrolling
          backgroundColor: '#d9dee9',
          contentView: SC.LabelView.design({
            layout: { centerX: 0, centerY: 0, width: 100, height: 18 },
            tagName: "h1",
            value: "links" //this is jsut placeholder text. The whole view will be replaced by some sort of ListView
            })
          }),
          
          crimenSidebarButtons: SC.ToolbarView.design({
          
          layout: { bottom: 0, left: 0, right: 0, height: 24 },
          anchorLocation: SC.ANCHOR_BOTTOM,
          childViews: 'crimenSidebarButtonsAdd'.w(),
            crimenSidebarButtonsAdd: SC.ButtonView.design({
      	
      	    theme: 'capsule', //What an ugly button. Can anyone figure out how to make this pretty?
      	    layout: { centerX: 0, centerY: 0, height: 24, width: 100 },
            title:  "+" 
            })
          })
      }),
      
      bottomRightView: SC.View.design({
      
        childViews: 'crimenMaincontentWelcome'.w(), //The welcome message at start. Detail views will be generated in seperate view file
          crimenMaincontentWelcome: SC.ScrollView.design({
          
          hasHorizontalScroller: NO, // disable horizontal scrolling
            contentView: SC.LabelView.design({
          
            layout: { centerX: 0, centerY: 0, width: 100, height: 18 },
            tagName: "h1",
            classNames: "welcomemessage",
            value: "rechts" //This text can't be seen, as the text color is white and the background is white, too.
            })
          })
      })
      
      
    })
  }) 
});
