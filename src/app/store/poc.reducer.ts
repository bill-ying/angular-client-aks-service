import { createReducer, on } from "@ngrx/store";
import * as PocActions from "./poc.actions";

export interface PocState {
    message: string;
    error: any;
}

export const initialState: PocState = {
    message: '',
    error: null
}

export const pocReducer = createReducer(
    initialState,
    on(PocActions.getServerStatusSuccess, (state, { status }) => { 
        return Object.assign({}, state, status)
    }),
    on(PocActions. getServerStatusFailure, (state, { error }) => { 
        return { ...state, error };
    })
)