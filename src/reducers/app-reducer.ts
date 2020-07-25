import {ActionsType, SET_ERROR} from "../actions/AppActions";

const initialState = {
    error: null as null | Error
};

export const appReducer = (state = initialState, action: ActionsType): State => {
    switch (action.type) {
        case SET_ERROR: {
            return {...state, error: action.error}
        }
        default:
            return state;
    }
};

type State = typeof initialState