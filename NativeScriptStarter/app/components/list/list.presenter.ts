import {IListPresenter} from "./list";
import {IListModel} from "./list";
import {IListInteractor} from "./list";
import {IListWireframe} from "./list";
import {IListView} from "./list";

import {AbstractPresenter} from "../../../core/AbstractPresenter";

import dialogs = require("ui/dialogs");

export class ListPresenter extends AbstractPresenter<IListModel, IListInteractor, IListWireframe, IListView> implements IListPresenter {

    public loadData(): void {
        this.interactor.getPersonList()
        .then((pPersonList: Array<Object>) => {
            this.model.personList = pPersonList;
        })
        .catch((error: any) => {
            dialogs.alert("Error while loading data");
        });
    }

    public onClickCreate(): void {
        this.wireframe.goToCreate();
    }

}