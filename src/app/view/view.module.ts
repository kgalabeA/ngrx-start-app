
import { UserListComponent } from './user/user-list/user-list.component';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ReadGeoComponent } from './geo/read-geo/read-geo.component';
import { AddGeoComponent } from './geo/add-geo/add-geo.component';
import { HomeComponent } from './home/home.component';
import { fromGeo, fromUser,UserEffects, MaterialModule } from '../core';
import { EffectsModule } from '@ngrx/effects';
import { NavComponent } from './shared/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';



@NgModule({
  declarations: [ReadGeoComponent, AddGeoComponent, HomeComponent,UserListComponent, NavComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    CoreModule,
    MaterialModule,
    StoreModule.forFeature('geo',fromGeo.geoReducer),
    StoreModule.forFeature('user',fromUser),
    EffectsModule.forFeature([UserEffects]),
    LayoutModule,
  ]
})
export class ViewModule { }
