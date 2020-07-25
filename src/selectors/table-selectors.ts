import {AppState} from "../store/configureStore";
import {createSelector} from "reselect";
import {filterObjectByKey} from "../utils/object-helpers";
import {SortConfig, TableData} from "../types/types";

export const getTableData = (state: AppState) => state.table.data;
export const getFilterKey = (state: AppState) => state.table.filterKey;
export const getSortConfig = (state: AppState) => state.table.sortConfig;

export const getSuitableData = createSelector(getTableData, getFilterKey, getSortConfig,
    (data, filterKey, sortConfig) => {
        if (!data) return data;
        return getSortedData(getFilteredData(data, filterKey), sortConfig)
    });


export const getFilteredData = (data: TableData, filterKey: string) => {
    return data.filter(item => {
        return filterObjectByKey(item, filterKey);
    })
};

export const getSortedData = (data: TableData, config: SortConfig | null) => {
    if (!config) return data;
    const sortableData = [...data];
    sortableData.sort((a: any, b: any) => {
        if (a[config.key] < b[config.key]) {
            return config.direction === "asc" ? -1 : 1;
        } else if (a[config.key] > b[config.key]) {
            return config.direction === "asc" ? 1 : -1;
        } else {
            return 0;
        }
    });
    return sortableData;
};














