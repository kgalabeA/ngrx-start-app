import * as actionTypes from '../actions';
import { Geo } from '../../models';
import { GeoActionTypes } from '../actions';

export interface GeoState {
    geo: Geo[];
    loading: boolean;
    error: any;
}

const initialState: GeoState = {
  geo:[],
  loading: false,
  error:null
};

export function geoReducer(state = initialState, action: actionTypes.GeoActions ): GeoState {
  switch (action.type) {
    case GeoActionTypes.ADD_GEO:
      return {
        ...state,
        loading: false,
        error :null,
      };

    case GeoActionTypes.LOAD_GEO:
      return {
        ...state,
        loading:false
      }

    default: {
      return state;
    }
  }
}
