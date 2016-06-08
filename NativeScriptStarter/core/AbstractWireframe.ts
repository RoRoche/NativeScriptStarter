
import {IWireframe} from "./IWireframe";

import {Location} from "@angular/common";
import {Router} from "@angular/router-deprecated";

export abstract class AbstractWireframe implements IWireframe {
    
    router: Router;
    location: Location;

    constructor(pRouter: Router, pLocation: Location) {
       this.router = pRouter;
       this.location = pLocation;
    }
}