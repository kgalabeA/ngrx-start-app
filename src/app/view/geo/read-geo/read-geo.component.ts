import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Geo, selectGeoList } from 'src/app';


@Component({
  selector: 'app-read-geo',
  templateUrl: './read-geo.component.html',
  styleUrls: ['./read-geo.component.css']
})
export class ReadGeoComponent implements OnInit {

  geos:Observable<Geo[]>;
  geeos:any

  constructor(private store:Store<AppState>) {
  }

  ngOnInit(): void {
  }

}
