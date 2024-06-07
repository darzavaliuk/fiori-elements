sap.ui.define([
    "sap/m/MessageToast"
], (MessageToast) => {
    'use strict';

    return {
        sayHello() {
            MessageToast.show("Hello!");
        }
    };
});
