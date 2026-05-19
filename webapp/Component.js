sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/Device"
], function (UIComponent, JSONModel, ResourceModel, Device) {
    "use strict";

    return UIComponent.extend("travel.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            console.log("Component.js - init");
            
            // Appeler le init du parent
            UIComponent.prototype.init.apply(this, arguments);

            var oDeviceModel = new JSONModel(Device);
            oDeviceModel.setDefaultBindingMode("OneWay");
            this.setModel(oDeviceModel, "device");

            // Le modèle JSON est créé par le manifest, simplement l'initialiser
            var oDataModel = this.getModel();
            console.log("Data model:", oDataModel);
            if (oDataModel) {
                oDataModel.setDefaultBindingMode("TwoWay");
                console.log("Data model initialized");
            }

            // Initialiser le router
            var oRouter = this.getRouter();
            console.log("Router:", oRouter);
            oRouter.initialize();
            console.log("Router initialized");
        },

        getContentDensityClass: function () {
            if (!this._sContentDensityClass) {
                if (!sap.ui.Device.support.touch) {
                    this._sContentDensityClass = "sapUiSizeCompact";
                } else {
                    this._sContentDensityClass = "sapUiSizeCozy";
                }
            }
            return this._sContentDensityClass;
        }
    });
});
