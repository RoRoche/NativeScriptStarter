import {Location} from "@angular/common";
import {Router} from "@angular/router-deprecated";

import {IWireframe} from "../../../core/IWireframe";

import {CreateComponent} from "../create/create.component"

export class ListWireframe implements IWireframe {

    router: Router;
    location: Location;

    constructor(pRouter: Router, pLocation: Location) {
       this.router = pRouter;
       this.location = pLocation;
    }

    public goToCreate(): void {
        this.router.navigate([CreateComponent.ID]);
    }

}