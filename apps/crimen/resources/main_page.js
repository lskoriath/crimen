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
            crimenToolbarHeading: SC.LabelView.design({
                layout: {
                    centerX: 0,
                    centerY: 0,
                    height: 24,
                    width: 300
                },
                controlSize: SC.LARGE_CONTROL_SIZE,
                fontWeight: SC.BOLD_WEIGHT,
                value: "_Welcome to Crimen".loc()
            }),

            crimenToolbarLogoutButton: SC.ButtonView.design({
                layout: {
                    centerY: 0,
                    height: 24,
                    right: 12,
                    width: 100
                },
                title: "_Logout".loc()
            })
        }),

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

            topLeftView: SC.View.design({

                backgroundColor: '#d9dee9',
                canCollapse: YES,
                //Has the list of entries and the buttons at the bottom
                childViews: 'crimenSidebarList crimenSidebarButtons'.w(),
                
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
                        //Here, the name ist displayed
                        contentValueKey: "name",
                        canEditContent: YES,

                        rowHeight: 30,
                        //adapts the content of the MainGrid. Is defined in moleculesController.
                        action: "showMoleculeContent",
                        exampleView: SC.ListItemView.design({

                            hasContentIcon: YES,
                            contentValueKey: "name",
                            contentIconKey: "icon",
                            contentUnreadCountKey: "atomsCount"
                        })
                    })
                }),

                crimenSidebarButtons: SC.ToolbarView.design({

                    layout: {
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 24
                    },
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

            bottomRightView: SC.View.design({

                //Preparation for swapping the Views in bottonrightView, when an atom is clicked
                //We should put all the views here in a container and let nowShowing control the content.
                childViews: 'crimenContainer'.w(),

                crimenContainer: SC.ContainerView.design({

                    layout: {
                        left: 10,
                        right: 10,
                        top: 14,
                        bottom: 10
                    },
					
					//Calling the currentContainerView function in the app controller.
                    nowShowingBinding: 'Crimen.appController.currentContainerView'
                })

            })

        })
    })
});

Crimen.mainViews = SC.Page.design({

    crimenContainerOverviewGrid: SC.ScrollView.design({

        // disable horizontal scrolling
        hasHorizontalScroller: NO,
        contentView: SC.GridView.design({

            classNames: ['crimenContainerOverviewGrid'],

            //connects to atomsController
            contentBinding: 'Crimen.atomsController.arrangedObjects',
            //selection is controlled by atomsController
            selectionBinding: 'Crimen.atomsController.selection',
            //Here, the name ist displayed
            contentValueKey: "name",
            rowHeight: 128,
            columnWidth: 128
        })
    })
});