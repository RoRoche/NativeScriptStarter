import {IPresenter} from "./IPresenter";
import {IModel} from "./IModel";
import {IInteractor} from "./IInteractor";
import {IWireframe} from "./IWireframe";
import {IView} from "./IView";

export abstract class AbstractPresenter<TModel extends IModel, TInteractor extends IInteractor, TWireframe extends IWireframe, TView extends IView<TModel>> 
        implements IPresenter<TModel, TInteractor, TWireframe, TView> {
    view: TView;
    model: TModel;
    interactor: TInteractor;
    wireframe: TWireframe;
}