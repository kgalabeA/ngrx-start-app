import { Observable } from 'rxjs';
import { UserListLoad } from './../../../core/store/actions/user.action';
import { Store, select } from '@ngrx/store';
import { AddGeoComponent } from './../../geo/add-geo/add-geo.component';
import { UserService } from './../../../core/services/user.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { UserListDataSource } from './user-list-datasource';
import {MatDialog} from '@angular/material/dialog';
import { AppState } from 'src/app/store';
import { selectUserList } from 'src/app/core/store/selectors/user.selector';





@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  dataSource: UserListDataSource;

  users:Observable<any>;

constructor(private userS:UserService,public dialog: MatDialog,private store:Store<AppState>){
this.store.dispatch(new UserListLoad())
}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name','username','email','phone','website','delete'];

  ngOnInit() {

    this.users=this.store.pipe(select(selectUserList));

    this.dataSource = new UserListDataSource();

    this.userS.getUsers().subscribe(res=>{
      //console.log(res);
      this.dataSource.setList(res);
    })

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;

    this.users.subscribe(list=>{
      if(list){
        console.log(list)
      }
    })
  }

  handleDelete(id:number){
    console.log("working",id);
this.openDialog()
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddGeoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  goToLink(url: string){
    window.open('https://'+url, "_blank");
}
}
