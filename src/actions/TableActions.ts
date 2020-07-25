import {BaseThunkType, InferredActionTypes} from "../store/configureStore";
import {TableData, TableItem, DatasetSize, SortDirections, SortConfig} from "../types/types";
import {API} from "../api/api";

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const ADD_ITEM = "ADD_ITEM";
export const SET_EDIT_MODE = "SET_EDIT_MODE";
export const SET_FILTER_KEY = "SET_FILTER_KEY";
export const SET_SORT_CONFIG = "SET_SORTING_CONFIG";

export const TableActions = {
    fetchData: () => ({type: FETCH_DATA} as const),
    fetchDataSuccess: (data: TableData) => ({type: FETCH_DATA_SUCCESS, data} as const),
    fetchDataFailure: () => ({type: FETCH_DATA_FAILURE} as const),
    setEditMode: (value: boolean) => ({type: SET_EDIT_MODE, value} as const),
    addItem: (item: TableItem) => ({type: ADD_ITEM, item} as const),
    setFilterKey: (key: string) => ({type: SET_FILTER_KEY, key} as const),
    setSortConfig: (config: SortConfig) => ({type: SET_SORT_CONFIG, config} as const)
};

export const getData = (size: DatasetSize): Thunk => async (dispatch) => {
    dispatch(TableActions.fetchData());
    try {
        const data = await API.getData(size);
        dispatch(TableActions.fetchDataSuccess(data))
    } catch (e) {
        dispatch(TableActions.fetchDataFailure())
    }
};

export type ActionsType = InferredActionTypes<typeof TableActions>

type Thunk = BaseThunkType<ActionsType>