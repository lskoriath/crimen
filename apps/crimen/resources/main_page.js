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
            //Toolbar height set to 36px
            layout: {
                top: 0,
                left: 0,
                right: 0,
                height: 36
            },
            //has a heading and a button
            childViews: 'crimenToolbarHeading crimenToolbarLogoutButton'.w(),
            //sits on top
            anchorLocation: SC.ANCHOR_TOP,
			//is a lableView
            crimenToolbarHeading: SC.LabelView.design({
                layout: {
                    centerX: 0,
                    centerY: 0,
                    height: 24,
                    width: 600
                },
                controlSize: SC.LARGE_CONTROL_SIZE,
                fontWeight: SC.BOLD_WEIGHT,
				//Welcome Message is bound to selected Molecule (for now)
                valueBinding: 'Crimen.moleculesController.headingContent'
            }),

			//The logout button in the main toolbar.
            crimenToolbarLogoutButton: SC.ButtonView.design({
                layout: {
                    centerY: 0,
                    height: 24,
                    right: 12,
                    width: 100
                },
                title: "_Logout".loc(),
				target: "Crimen.appController",
                action: "currentContainerView()"
            })
        }),
		//Maincontent is split in 2 views. Here is defined where it splits.
        crimenMaincontent: SC.SplitView.design({
            layout: {
                top: 36,
                bottom: 0,
                left: 0,
                right: 0
            },
            backgroundColor: 'white',
            defaultThickness: 250,
            minThickness: 200,
            maxThickness: 350,
            canCollapseViews: YES,
            dividerThickness: 1,

			//the sidebar
            topLeftView: SC.View.design({

                backgroundColor: '#d9dee9',
                canCollapse: YES,
                //Has the list of entries and the buttons at the bottom
                childViews: 'crimenSidebarList crimenSidebarButtons'.w(),

				//the Sidebar is a Scrollview
                crimenSidebarList: SC.ScrollView.design({

                    layout: {
                        left: 0,
                        right: 0,
                        top: 0
                    },
                    // disable horizontal scrolling
                    hasHorizontalScroller: NO,
                    contentView: SC.SourceListView.design({

                        classNames: ['crimenSidebarList'],

                        //connects to atomsController (needs to be changed to molecules)
                        contentBinding: 'Crimen.moleculesController.arrangedObjects',
                        //selection is controlled by atomsController
                        selectionBinding: 'Crimen.moleculesController.selection',
                        //Here, the name is displayed
                        contentValueKey: "name",
                        canEditContent: YES,

                        rowHeight: 30,
                        //adapts the content of the MainGrid. Is defined in moleculesController.
						actOnSelect: YES,
						//targets the controller
						target: "Crimen.moleculesController",
						//defines the function in the controller, that will be activated
                        action: "showMoleculeContent",
                        exampleView: SC.ListItemView.design({
							
							//allows to have the "Molecule-Icon" in front of every molecule
                            hasContentIcon: YES,
                            contentValueKey: "name",
                            contentIconKey: "icon",
							//here its the count of atoms in each molecule
                            contentUnreadCountKey: "atomsCount"
                        })
                    })
                }),

				//the "add-button"
                crimenSidebarButtons: SC.ToolbarView.design({

                    layout: {
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 24
                    },
					//at the bottom of the sidebar
                    anchorLocation: SC.ANCHOR_BOTTOM,
                    childViews: 'crimenSidebarButtonsAdd'.w(),

                    crimenSidebarButtonsAdd: SC.ButtonView.design({

                        //What an ugly button. Can anyone figure out how to make this pretty?
                        theme: 'capsule',
                        layout: {
                            centerX: 0,
                            centerY: 0,
                            height: 24,
                            width: 100
                        },
                        title: "+",
                        //Connects to moleculesController
                        target: "Crimen.moleculesController",
                        //invokes function addMolecule defined in moleculesController
                        action: "addMolecule"
                    })
                })
            }),
			//here bottomRightView is the mainContentView (its always the view on the other side of the devider)
            bottomRightView: SC.View.design({

                //Preparation for swapping the Views in bottonrightView, when an atom is clicked
                //We should put all the views here in a container and let nowShowing control the content.
                childViews: 'crimenContainer'.w(),

				//it's a ContainerView
                crimenContainer: SC.ContainerView.design({

                    layout: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    },

                    //Calling the currentContainerView function in the app controller.
                    nowShowingBinding: 'Crimen.appController.currentContainerView'
                })

            })

        })
    })
});

Crimen.mainViews = SC.Page.design({

// ..........................................................
// This is the grid overview, in wich all atoms of a molecule
// are shown.

    crimenContainerOverviewGrid: SC.ScrollView.design({

        // disable horizontal scrolling
        hasHorizontalScroller: NO,
        contentView: SC.GridView.design({

            classNames: ['crimenContainerOverviewGrid'],

            //connects to atomsController
            contentBinding: 'Crimen.atomsController.arrangedObjects',
            //selection is controlled by atomsController
            selectionBinding: 'Crimen.atomsController.selection',
            //Here, the name is displayed
            contentValueKey: "name",
            rowHeight: 128,
            columnWidth: 128
        })
    }),

// ..........................................................
// This is the beginning of a single atom view. It has to be greatly
// extended in the future.

    crimenContainerSingle: SC.View.design({
        backgroundColor: '#d9dee9',
        childViews: 'crimenContainerSingleToolbar'.w(),
        layout: {
            left: 0,
            right: 0
        },

		//The single view should have a toolbar, from which you can get
		//back to the overview. It should be rethemed.
		
        crimenContainerSingleToolbar: SC.ToolbarView.design({

            //Toolbar height set to 24px
            layout: {
                top: 0,
                left: 0,
                right: 0,
                height: 24
            },
            //has a heading and a button
            childViews: 'crimenContainerSingleToolbarBackButton'.w(),
            //sits on top
            anchorLocation: SC.ANCHOR_TOP,


			//That's the back button on the toolbar. It needs to be loclaized.
            crimenContainerSingleToolbarBackButton: SC.ButtonView.design({
                layout: {
                    centerY: 0,
                    height: 18,
                    left: 12,
                    width: 100
                },
                title: "_Back".loc()
            })

        })
    })
});
