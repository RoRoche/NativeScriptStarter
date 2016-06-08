import {IModel} from "./IModel";
import {IInteractor} from "./IInteractor";
import {IView} from "./IView";
import {IWireframe} from "./IWireframe";
import {IPresenter} from "./IPresenter";

export interface IViewController<TModel extends IModel, TInteractor extends IInteractor, TWireframe extends IWireframe, TView extends IView<TModel>, TPresenter extends IPresenter<TModel, TInteractor, TWireframe, TView>> {
    presenter: TPresenter;
}