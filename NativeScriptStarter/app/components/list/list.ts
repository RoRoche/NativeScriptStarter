import {IModel} from "../../../core/IModel";
import {IView} from "../../../core/IView";
import {IPresenter} from "../../../core/IPresenter";
import {IInteractor} from "../../../core/IInteractor";
import {IWireframe} from "../../../core/IWireframe";
import {IViewController} from "../../../core/IViewController";
import {AbstractViewController} from "../../../core/AbstractViewController";

export interface IListModel extends IModel {
    personList: Array<Object>;
}

export interface IListView extends IView<IListModel> {}

export interface IListPresenter extends IPresenter<IListModel, IListInteractor, IListWireframe, IListView> {
    loadData(): void;
    onClickCreate(): void;
}

export interface IListInteractor extends IInteractor {
    getPersonList(): Promise<Array<Object>>;
}

export interface IListWireframe extends IWireframe {
    goToCreate(): void;
}

export abstract class AbstractListViewController 
    extends AbstractViewController<IListModel, IListInteractor, IListWireframe, IListView, IListPresenter> 
    implements IViewController<IListModel, IListInteractor, IListWireframe, IListView, IListPresenter>, IListView {}