import {AppState} from "../store/configureStore";
import {createSelector} from "reselect";
import { filterObjectByKey } from "../utils/object-helpers";

export const getTableData = (state: AppState) => state.table.data;
export const getFilterKey = (state: AppState) => state.table.filterKey;

export const getFilteredData = createSelector(getTableData, getFilterKey,
    (data, filterKey) => {
        if (!data) return null;
        return data.filter(item => {
            return filterObjectByKey(item, filterKey);
        })
    });










