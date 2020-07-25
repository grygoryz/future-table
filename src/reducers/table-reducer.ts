import {TableData, SortConfig} from "../types/types";
import {
    ActionsType,
    ADD_ITEM,
    FETCH_DATA,
    FETCH_DATA_FAILURE,
    FETCH_DATA_SUCCESS,
    SET_EDIT_MODE,
    SET_FILTER_KEY,
    SET_SORT_CONFIG,
    TURN_PAGE
} from "../actions/TableActions";

export const tableHeaders = ["id", "firstName", "lastName", "email", "phone"];

const initialState = {
    data: null as null | TableData,
    isFetching: false,
    editMode: false,
    filterKey: "",
    sortConfig: null as null | SortConfig,
    paginationConfig: {
        pageSize: 15,
        startIndex: 0
    }
};

export const tableReducer = (state = initialState, action: ActionsType): State => {
    switch (action.type) {
        case FETCH_DATA: {
            return {...state, isFetching: true}
        }
        case FETCH_DATA_SUCCESS: {
            return {...state, data: action.data, isFetching: false}
        }
        case FETCH_DATA_FAILURE: {
            return {...state, data: null, isFetching: false}
        }
        case SET_EDIT_MODE: {
            return {...state, editMode: action.value}
        }
        case ADD_ITEM: {
            return {...state, data: [action.item, ...state.data!]}
        }
        case SET_FILTER_KEY: {
            return {...state, filterKey: action.key, paginationConfig: {...state.paginationConfig, startIndex: 0}}
        }
        case SET_SORT_CONFIG: {
            return {...state, sortConfig: action.config, paginationConfig: {...state.paginationConfig, startIndex: 0}}
        }
        case TURN_PAGE: {
            const {startIndex, pageSize} = state.paginationConfig;
            return {
                ...state,
                paginationConfig: {
                    ...state.paginationConfig,
                    startIndex: action.isNext ? startIndex + pageSize : startIndex - pageSize
                }
            }
        }
        default:
            return state;
    }
};

type State = typeof initialState