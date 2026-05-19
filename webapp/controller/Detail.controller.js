sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function (Controller, History) {
    "use strict";

    return Controller.extend("travel.controller.Detail", {
        onInit: function () {
            this.getOwnerComponent().getRouter().getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {
            var sTravelId = oEvent.getParameter("arguments").travelId;
            this.getView().bindElement({
                path: "/travels/" + sTravelId
            });
        },

        onNavBack: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                this.getOwnerComponent().getRouter().navTo("app", {}, true);
            }
        }
    });
});
