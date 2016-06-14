import {Location} from "@angular/common";
import {Router} from "@angular/router-deprecated";

import {AbstractWireframe} from "./AbstractWireframe";

import {CreateComponent} from "../create/create.component"

export class ListWireframe extends AbstractWireframe {

    constructor(pRouter: Router, pLocation: Location) {
        super(pRouter, pLocation);
    }

    public goToCreate(): void {
        this.router.navigate([CreateComponent.ID]);
    }

}