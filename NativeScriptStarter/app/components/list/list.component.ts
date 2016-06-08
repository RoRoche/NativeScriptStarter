import {Component} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router-deprecated";

import * as applicationSettings from "application-settings";

import {AbstractListViewController} from "./list";
import {IListView} from "./list";
import {ListPresenter} from "./list.presenter";
import {ListModel} from "./list.model";
import {ListWireframe} from "./list.wireframe";
 
@Component({
    selector: "list",
    templateUrl: "./components/list/list.html",
})
export class ListComponent extends AbstractListViewController {
    public static get ID():string { return "List"; }

    router: Router;
    personList: Array<Object>;
 
    constructor(pRouter: Router, pLocation: Location) {
        super(new ListPresenter(), new ListModel(), new ListWireframe(pRouter, pLocation));
        
        this.presenter.loadData();

        pLocation.subscribe((path) => {
            this.presenter.loadData();
        });
    }
}