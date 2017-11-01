define([], function () {
    'use strict';

    var dimensions = { 
        uses: "dimensions",
        min: 1
     };

    var measures = { 
        uses: "measures",
        min: 1,
        items: {

            bar: {
                type: "boolean",
                component: "switch",
                label: "Индикатор",
                ref: "qDef.bar",
                options: [
                    {
                        label: "On",
                        value: true
                    },
                    {
                        label: 'Off',
                        value: false
                    }

                ],
                defaultValue: false
            }
        }
        
};
    var sorting = { uses: "sorting" };
    var addons = { uses: "addons" };

    var tab1 = {
        label: "Таб1",
        items: {
            tab_title: {
                ref: "props.tab_title1",  
                label: "Таб_имя1",  
                type: "string",  
                defaultValue: "Таб1" 
            },
            mera1: {
                ref: "props.tab1_title1",  
                label: "Мера1",  
                type: "string",  
                defaultValue: "" 
            },
            mera2: {
                ref: "props.tab1_title2",  
                label: "Мера2",  
                type: "string",  
                defaultValue: "" 
            },
            mera3: {
                ref: "props.tab1_title3",  
                label: "Мера3",  
                type: "string",  
                defaultValue: "" 
            },
            mera4: {
                ref: "props.tab1_title4",  
                label: "Мера4",  
                type: "string",  
                defaultValue: "" 
            }
        }

    };

    var tab2 = {
        label: "Таб2",
        component: "expandable-items",
        items: {
            tab_title: {
                ref: "props.tab_title2",  
                label: "Таб_имя2",  
                type: "string",  
                defaultValue: "Таб2" 
            },
            mera1: {
                ref: "props.tab2_title1",  
                label: "Мера1",  
                type: "string",  
                defaultValue: "" 
            },
            mera2: {
                ref: "props.tab2_title2",  
                label: "Мера2",  
                type: "string",  
                defaultValue: "" 
            },
            mera3: {
                ref: "props.tab3_title3",  
                label: "Мера3",  
                type: "string",  
                defaultValue: "" 
            },
            mera4: {
                ref: "props.taи4_title4",  
                label: "Мера4",  
                type: "string",  
                defaultValue: "" 
            }
        }

    };

    var tab3 = {
        label: "Таб3",
        component: "expandable-items",
        items: {
            tab_title: {
                ref: "props.tab_title3",  
                label: "Таб_имя3",  
                type: "string",  
                defaultValue: "Таб3" 
            },
            mera1: {
                ref: "props.tab3_title1",  
                label: "Мера1",  
                type: "string",  
                defaultValue: "" 
            },
            mera2: {
                ref: "props.tab3_title2",  
                label: "Мера2",  
                type: "string",  
                defaultValue: "" 
            },
            mera3: {
                ref: "props.tab3_title3",  
                label: "Мера3",  
                type: "string",  
                defaultValue: "" 
            },
            mera4: {
                ref: "props.tab3_title4",  
                label: "Мера4",  
                type: "string",  
                defaultValue: "" 
            }
        }

    };
        
    // var tab_title2 = {
    //     label:"Таб_имя2",
    //     ref: "props.tab_title2",
    //     type: "string",
    //     defaultValue: 'Таб2'
    // };
        
    // var tab_title3 = {
    //     label:"Таб_имя3",
    //     ref: "props.tab_title3",
    //     type: "string",
    //     defaultValue: 'Таб3'
    // };
    
    var currency = {
        label:"Валюта",
        ref: "props.currency",
        type: "string",
        defaultValue: 'руб.'
    }

    var appearancePanel = { 
        uses: "settings",
        items: {
            currency: currency,
            tab1: tab1,
            tab2: tab2,
            tab3: tab3
        }
    };



    return {
        type: "items",
        component: "accordion",
        items: {
            dimensions: dimensions,
            measures: measures,
            sorting: sorting,
            appearance: appearancePanel
        }
    };
});