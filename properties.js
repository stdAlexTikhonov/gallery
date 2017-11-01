define([], function () {
    'use strict';

    var dimensions = { 
        uses: "dimensions",
        min: 4
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
        type: "items",
        label: "Таб1",
        items: {
            tab_title: {
                ref: "props.tab_title1",  
                label: "Таб_имя1",  
                type: "string",  
                defaultValue: "Таб1" 
            },
            mera1: {
                ref: "props.mera0",  
                label: "Мера1",  
                type: "string",  
                defaultValue: "" 
            },
            mera2: {
                ref: "props.mera1",  
                label: "Мера2",  
                type: "string",  
                defaultValue: "" 
            },
            mera3: {
                ref: "props.mera2",  
                label: "Мера3",  
                type: "string",  
                defaultValue: "" 
            },
            mera4: {
                ref: "props.mera3",  
                label: "Мера4",  
                type: "string",  
                defaultValue: "" 
            }
        }

    };

    var tab2 = {
        label: "Таб2",
        type: "items",
        items: {
            tab_title: {
                ref: "props.tab_title2",  
                label: "Таб_имя2",  
                type: "string",  
                defaultValue: "Таб2" 
            },
            mera1: {
                ref: "props.mera4",  
                label: "Мера1",  
                type: "string",  
                defaultValue: "" 
            },
            mera2: {
                ref: "props.mera5",  
                label: "Мера2",  
                type: "string",  
                defaultValue: "" 
            },
            mera3: {
                ref: "props.mera6",  
                label: "Мера3",  
                type: "string",  
                defaultValue: "" 
            },
            mera4: {
                ref: "props.mera7",  
                label: "Мера4",  
                type: "string",  
                defaultValue: "" 
            }
        }

    };

    var tab3 = {
        label: "Таб3",
        type: "items",
        items: {
            tab_title: {
                ref: "props.tab_title3",  
                label: "Таб_имя3",  
                type: "string",  
                defaultValue: "Таб3" 
            },
            mera1: {
                ref: "props.mera8",  
                label: "Мера1",  
                type: "string",  
                defaultValue: "" 
            },
            mera2: {
                ref: "props.mera9",  
                label: "Мера2",  
                type: "string",  
                defaultValue: "" 
            },
            mera3: {
                ref: "props.mera10",  
                label: "Мера3",  
                type: "string",  
                defaultValue: "" 
            },
            mera4: {
                ref: "props.mera11",  
                label: "Мера4",  
                type: "string",  
                defaultValue: "" 
            }
        }

    };

    
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