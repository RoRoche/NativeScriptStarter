import {Component} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router-deprecated";
import * as applicationSettings from "application-settings";

import {ListModel} from "./list.model";
import {ListInteractor} from "./list.interactor";
import {ListWireframe} from "./list.wireframe";

import dialogs = require("ui/dialogs");

import {CreateComponent} from "../create/create.component";
 
@Component({
    selector: "list",
    templateUrl: "./components/list/list.html",
})
export class ListComponent {
    public static get ID(): string { return "List"; }

    model: ListModel;
    interactor: ListInteractor;
    wireframe: ListWireframe;
 
    constructor(pRouter: Router, pLocation: Location) {
        this.model = new ListModel();
        this.interactor = new ListInteractor();
        this.wireframe = new ListWireframe(pRouter, pLocation);
        
        this.loadData();

        pLocation.subscribe((path) => {
            this.loadData();
        });
    }

    private loadData(): void {
        this.interactor.getPersonList()
            .then((personList: Array<Object>) => {
                this.model.personList = personList;
            })
            .catch((error: any) => {
                dialogs.alert("Error while loading data");
            });
    }
 
    public onClickCreate(): void {
        this.wireframe.goToCreate();
    }
}