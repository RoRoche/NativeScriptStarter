import {IViewController} from "./IViewController";
import {IModel} from "./IModel";
import {IInteractor} from "./IInteractor";
import {IWireframe} from "./IWireframe";
import {IView} from "./IView";
import {IPresenter} from "./IPresenter";

export abstract class AbstractViewController<
            TModel extends IModel, 
            TInteractor extends IInteractor, 
            TWireframe extends IWireframe, 
            TView extends IView<TModel>,
            TPresenter extends IPresenter<TModel, TInteractor, TWireframe, TView>
        > implements IViewController<TModel, TInteractor, TWireframe, TView, TPresenter> {

    presenter: TPresenter;  
        
    constructor(pPresenter: TPresenter, pModel: TModel, pWireframe: TWireframe) {
        this.presenter = pPresenter;
        this.presenter.model = pModel;
        this.presenter.wireframe = pWireframe;
    }
}