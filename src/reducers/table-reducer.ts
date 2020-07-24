import {TableData} from "../types/types";
import {
    ActionsType,
    ADD_ITEM,
    FETCH_DATA,
    FETCH_DATA_FAILURE,
    FETCH_DATA_SUCCESS,
    FILTER_BY_KEY,
    SET_EDIT_MODE
} from "../actions/TableActions";

const initialState = {
    data: null as null | TableData,
    isFetching: false,
    editMode: false,

   // filterKey: null as null | string,
};

export const tableReducer = (state = initialState, action: ActionsType): State => {
    switch(action.type) {
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
        case FILTER_BY_KEY: {
            return {
                ...state,
                data: state.data!.filter(item => {
                    for (let prop in item) {
                        if (prop.includes(action.key)) return true;
                    }
                    return false
                })
            }
        }
        default:
            return state;
    }
};

type State = typeof initialState