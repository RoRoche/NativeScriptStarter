import {IModel} from "./IModel";
import {IInteractor} from "./IInteractor";
import {IWireframe} from "./IWireframe";
import {IView} from "./IView";

export interface IPresenter<TModel extends IModel, TInteractor extends IInteractor, TWireframe extends IWireframe, TView extends IView<TModel>> {
    view: TView;
    model: TModel;
    interactor: TInteractor;
    wireframe: IWireframe;
}