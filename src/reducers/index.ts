import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {tableReducer} from "./table-reducer";
import {appReducer} from "./app-reducer";

export const rootReducer = combineReducers({
    table: tableReducer,
    app: appReducer,
    form: formReducer
});

