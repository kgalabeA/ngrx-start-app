import { Action } from '@ngrx/store';
import { Geo } from '../../models';

export enum GeoActionTypes {
  LOAD_GEO = '[Geo] Load',
  ADD_GEO = '[Geo] Add',
  REMOVE_GEO = '[Geo] Remove'
}

export class LoadGeo implements Action{
  readonly type = GeoActionTypes.LOAD_GEO;
}

export class AddGeo implements Action {
  readonly type = GeoActionTypes.ADD_GEO;

  constructor(public payload: Geo) { }
}

export class RemoveGeo implements Action {
  readonly type = GeoActionTypes.REMOVE_GEO;

  constructor(public payload: number) { }
}

export type GeoActions
            = LoadGeo|AddGeo| RemoveGeo;
