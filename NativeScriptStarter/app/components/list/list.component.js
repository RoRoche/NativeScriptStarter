"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_deprecated_1 = require("@angular/router-deprecated");
var list_1 = require("./list");
var list_presenter_1 = require("./list.presenter");
var list_model_1 = require("./list.model");
var list_wireframe_1 = require("./list.wireframe");
var ListComponent = (function (_super) {
    __extends(ListComponent, _super);
    function ListComponent(pRouter, pLocation) {
        var _this = this;
        _super.call(this, new list_presenter_1.ListPresenter(), new list_model_1.ListModel(), new list_wireframe_1.ListWireframe(pRouter, pLocation));
        this.presenter.loadData();
        pLocation.subscribe(function (path) {
            _this.presenter.loadData();
        });
    }
    Object.defineProperty(ListComponent, "ID", {
        get: function () { return "List"; },
        enumerable: true,
        configurable: true
    });
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "./components/list/list.html",
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, common_1.Location])
    ], ListComponent);
    return ListComponent;
}(list_1.AbstractListViewController));
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map