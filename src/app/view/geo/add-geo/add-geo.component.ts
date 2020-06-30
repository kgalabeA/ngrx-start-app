import { UserService } from './../../../core/services/user.service';
import { AddGeo } from './../../../core/store/actions/geo.action';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-geo',
  templateUrl: './add-geo.component.html',
  styleUrls: ['./add-geo.component.css']
})
export class AddGeoComponent implements OnInit {

  constructor(private store: Store<AppState>,private userService:UserService) { }

  addGeo(lat, lng) {
    this.store.dispatch(new AddGeo({lat: lat, lng: lng}) )
  }


  ngOnInit(): void {

    this.userService.getUsers().subscribe(list=>{
      console.log(list);

    })
  }

}
