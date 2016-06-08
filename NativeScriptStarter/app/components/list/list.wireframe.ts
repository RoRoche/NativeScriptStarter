import {IListWireframe} from "./list";

import {AbstractWireframe} from "../../../core/AbstractWireframe";

export class ListWireframe extends AbstractWireframe implements IListWireframe {

    public goToCreate(): void {
        this.router.navigate(["Create"]);
    }

}