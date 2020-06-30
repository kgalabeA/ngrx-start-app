import { createFeatureSelector, createSelector } from '@ngrx/store';
import {GeoState} from '../reducers/geo.reducer';

export const selectGeoState = createFeatureSelector<GeoState>('geo');

export const selectGeoList = createSelector(selectGeoState,GeoState=>GeoState['geo']);
