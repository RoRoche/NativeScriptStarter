import {IModel} from "../../../core/IModel";
import {IInteractor} from "../../../core/IInteractor";
import {IWireframe} from "../../../core/IWireframe";

export interface IListModel extends IModel {
    personList: Array<Object>;
}

export interface IListInteractor extends IInteractor {
    getPersonList(): Promise<Array<Object>>;
}

export interface IListWireframe extends IWireframe {
    goToCreate(): void;
}