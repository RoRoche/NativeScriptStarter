"use strict";
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var router_1 = require("nativescript-angular/router");
var list_component_1 = require("./components/list/list.component");
var create_component_1 = require("./components/create/create.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            providers: [router_1.NS_ROUTER_PROVIDERS],
            template: "<page-router-outlet></page-router-outlet>"
        }),
        router_deprecated_1.RouteConfig([
            { path: "/list", component: list_component_1.ListComponent, name: list_component_1.ListComponent.ID, useAsDefault: true },
            { path: "/create", component: create_component_1.CreateComponent, name: create_component_1.CreateComponent.ID },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map