import { UserEffects } from './../core/store/effects/user.effect';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ReadGeoComponent } from './geo/read-geo/read-geo.component';
import { AddGeoComponent } from './geo/add-geo/add-geo.component';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { SingleUserComponent } from './user/single-user/single-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import { fromGeo, fromUser } from '../core';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [ReadGeoComponent, AddGeoComponent, HomeComponent, UserHomeComponent, AddUserComponent, SingleUserComponent, UserListComponent, UserTableComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    CoreModule,
    StoreModule.forFeature('geo',fromGeo.geoReducer),
    StoreModule.forFeature('user',fromUser),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class ViewModule { }
