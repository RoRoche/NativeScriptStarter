import {Component} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router-deprecated";
import * as applicationSettings from "application-settings";

import {ListModel} from "./list.model";
 
@Component({
    selector: "list",
    templateUrl: "./components/list/list.html",
})
export class ListComponent {
    public static get ID(): string { return "List"; }

    model: ListModel;
    
    router: Router;
 
    constructor(pRouter: Router, pLocation: Location) {
        this.model = new ListModel();
        this.router = pRouter;
        
        this.loadData();

        pLocation.subscribe((path) => {
            this.loadData();
        });
    }

    private loadData(): void {
        this.model.personList = JSON.parse(applicationSettings.getString("people", "[]"));
    }
 
    public onClickCreate(): void {
        this.router.navigate(["Create"]);
    }
}