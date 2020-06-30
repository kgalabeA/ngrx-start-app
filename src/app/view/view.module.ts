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
import { MatSliderModule } from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [ReadGeoComponent, AddGeoComponent, HomeComponent, UserHomeComponent, AddUserComponent, SingleUserComponent, UserListComponent, UserTableComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    MatListModule,
    MatSortModule
  ]
})
export class ViewModule { }
