import {IListPresenter} from "./list";
import {IListModel} from "./list";
import {IListInteractor} from "./list";
import {IListWireframe} from "./list";
import {IListView} from "./list";

import {AbstractWireframe} from "../../../core/AbstractWireframe";

import {CreateComponent} from "../create/create.component";

export class ListWireframe extends AbstractWireframe implements IListWireframe {

    public goToCreate(): void {
        this.router.navigate([CreateComponent.ID]);
    }
    
}