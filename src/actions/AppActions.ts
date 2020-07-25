import {BaseThunkType, InferredActionTypes} from "../store/configureStore";

export const SET_ERROR = "SET_ERROR";

export const AppActions = {
    setError: (error: Error | null) => ({type: SET_ERROR, error} as const)
};

export const handleError = (error: Error): Thunk => dispatch => {
    dispatch(AppActions.setError(error));
    setTimeout(() => dispatch(AppActions.setError(null)), 4000)
};

export type ActionsType = InferredActionTypes<typeof AppActions>

type Thunk = BaseThunkType<ActionsType>