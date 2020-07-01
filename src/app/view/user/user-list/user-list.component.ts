import { AddGeoComponent } from './../../geo/add-geo/add-geo.component';
import { UserService } from './../../../core/services/user.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { UserListDataSource } from './user-list-datasource';
import {MatDialog} from '@angular/material/dialog';





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


constructor(private userS:UserService,public dialog: MatDialog){

}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name','username','email','phone','website','delete'];

  ngOnInit() {

    this.dataSource = new UserListDataSource();

    this.userS.getUsers().subscribe(res=>{
      console.log(res);
      this.dataSource.setList(res);
    })

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
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
}
