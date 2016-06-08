import {IListInteractor} from "./list"

import * as applicationSettings from "application-settings";

export class ListInteractor implements IListInteractor {

    public getPersonList(): Promise<Array<Object>> {
        return new Promise<Array<Object>>((resolve, reject) => {
            resolve(JSON.parse(applicationSettings.getString("people", "[]")));
        });
    }
    
}