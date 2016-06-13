import {Location} from "@angular/common";
import {Router} from "@angular/router-deprecated";

export class ListWireframe {

    router: Router;
    location: Location;

    constructor(pRouter: Router, pLocation: Location) {
       this.router = pRouter;
       this.location = pLocation;
    }

    public goToCreate(): void {
        this.router.navigate(["Create"]);
    }

}