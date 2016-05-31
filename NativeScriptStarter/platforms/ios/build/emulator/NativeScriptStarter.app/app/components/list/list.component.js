"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_deprecated_1 = require("@angular/router-deprecated");
var applicationSettings = require("application-settings");
var ListComponent = (function () {
    function ListComponent(router, location) {
        var _this = this;
        this.router = router;
        this.personList = JSON.parse(applicationSettings.getString("people", "[]"));
        location.subscribe(function (path) {
            _this.personList = JSON.parse(applicationSettings.getString("people", "[]"));
        });
    }
    ListComponent.prototype.create = function () {
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