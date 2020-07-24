import {TableData} from "../types/types";
import {FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, ADD_ITEM, ActionsType, FETCH_DATA} from "../actions/TableActions";

const initialState = {
    data: null as null | TableData,
    isFetching: false
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
        case ADD_ITEM: {
            return{...state, data: [action.item, ...state.data!]}
        }
        default:
            return state;
    }
};

type State = typeof initialState