import { createAction, props } from "@ngrx/store";

export const getServerStatus = createAction(
    '[POC] Get Server Status'
);

export const getServerStatusSuccess = createAction(
    '[POC] Get Server Status Success', 
    props<{status: { message: string }}>()
);

export const getServerStatusFailure = createAction(
    '[POC] Get Server Status Failure', 
    props<{error: any}>()
);

;