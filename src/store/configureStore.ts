import {rootReducer} from "../reducers";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import {applyMiddleware, compose, createStore, Action} from "redux";

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store;

export type AppState = ReturnType<typeof rootReducer>;

export type InferredActionTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never

export type BaseThunkType<A extends Action, R = void> = ThunkAction<R, AppState, unknown, A>

