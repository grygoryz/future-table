import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {tableReducer} from "./table-reducer";

export const rootReducer = combineReducers({
    table: tableReducer,
    form: formReducer
});

