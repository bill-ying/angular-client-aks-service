import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import * as PacActions from "./poc.actions";

const hostlink = 'http://127.0.0.1:5000/';
// const hostlink = 'http://4.174.172.228'; // Replace with the REST API server URL

@Injectable()
export class pocEffects {
    getServerStatus$ = createEffect(() => this._actions$.pipe(
        ofType(PacActions.getServerStatus),
        switchMap(() => {
            return this._http.get<Record<string, string>>(hostlink).pipe(
                map((f: Record<string, string>) => PacActions.getServerStatusSuccess({status: f})),
                catchError((e: any) => of(PacActions.getServerStatusFailure(e)))
            );
        }),
    ));

    constructor(private _actions$: Actions, private _http: HttpClient) { }
}