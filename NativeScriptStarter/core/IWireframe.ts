import {Location} from "@angular/common";
import {Router} from "@angular/router-deprecated";

export interface IWireframe {
    router: Router;
    location: Location;
}