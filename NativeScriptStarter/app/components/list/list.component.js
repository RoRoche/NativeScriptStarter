"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_deprecated_1 = require("@angular/router-deprecated");
var applicationSettings = require("application-settings");
var list_model_1 = require("./list.model");
var ListComponent = (function () {
    function ListComponent(pRouter, pLocation) {
        var _this = this;
        this.model = new list_model_1.ListModel();
        this.router = pRouter;
        this.loadData();
        pLocation.subscribe(function (path) {
            _this.loadData();
        });
    }
    Object.defineProperty(ListComponent, "ID", {
        get: function () { return "List"; },
        enumerable: true,
        configurable: true
    });
    ListComponent.prototype.loadData = function () {
        this.model.personList = JSON.parse(applicationSettings.getString("people", "[]"));
    };
    ListComponent.prototype.onClickCreate = function () {
        this.router.navigate(["Create"]);
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "./components/list/list.html",
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, common_1.Location])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map