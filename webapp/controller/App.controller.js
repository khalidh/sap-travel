sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("travel.controller.App", {
        onInit: function () {
            console.log("App.controller.js - onInit");
            this.getOwnerComponent().getRouter().getRoute("app").attachPatternMatched(this._showTravelList, this);
        },

        _showTravelList: function () {
            this.byId("app").to(this.byId("travelPage"));
        },

        onSearch: function (oEvent) {
            var sQuery = oEvent.getParameter("query") || oEvent.getParameter("newValue");
            var aFilters = [];

            if (sQuery) {
                aFilters.push(new Filter({
                    filters: [
                        new Filter("country", FilterOperator.Contains, sQuery),
                        new Filter("city", FilterOperator.Contains, sQuery),
                        new Filter("description", FilterOperator.Contains, sQuery)
                    ],
                    and: false
                }));
            }

            var oList = this.byId("travelList");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilters);
        },

        onItemPress: function (oEvent) {
            console.log("onItemPress triggered");
            var oItem = oEvent.getParameter("listItem") || oEvent.getSource();
            var oContext = oItem.getBindingContext();
            
            if (!oContext) {
                console.error("Pas de binding context");
                return;
            }
            
            var sPath = oContext.getPath();
            console.log("Binding path:", sPath);
            
            var sTravelId = sPath.split("/").pop();
            console.log("Travel ID:", sTravelId);
            
            var oRouter = this.getOwnerComponent().getRouter();
            console.log("Router:", oRouter);
            
            if (oRouter) {
                oRouter.navTo("detail", {
                    travelId: sTravelId
                });
                console.log("Navigation to detail:", sTravelId);
            } else {
                console.error("Router not found");
            }
        }
    });
});
