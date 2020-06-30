import { AddGeo, GeoActionTypes } from './../actions/geo.action';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {mergeMap} from 'rxjs/operators';

@Injectable()
export class GeoEffects {
  @Effect()
  addGeo$=this.actions$.pipe(
    ofType<AddGeo>(GeoActionTypes.ADD_GEO),
    mergeMap(()=>{
      return;
    })
  );

  constructor(
    private actions$: Actions
  ) {}
}
