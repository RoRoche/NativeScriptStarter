"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_deprecated_1 = require("@angular/router-deprecated");
var list_model_1 = require("./list.model");
var list_interactor_1 = require("./list.interactor");
var dialogs = require("ui/dialogs");
var create_component_1 = require("../create/create.component");
var ListComponent = (function () {
    function ListComponent(pRouter, pLocation) {
        var _this = this;
        this.model = new list_model_1.ListModel();
        this.interactor = new list_interactor_1.ListInteractor();
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
        var _this = this;
        this.interactor.getPersonList()
            .then(function (personList) {
            _this.model.personList = personList;
        })
            .catch(function (error) {
            dialogs.alert("Error while loading data");
        });
    };
    ListComponent.prototype.onClickCreate = function () {
        this.router.navigate([create_component_1.CreateComponent.ID]);
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