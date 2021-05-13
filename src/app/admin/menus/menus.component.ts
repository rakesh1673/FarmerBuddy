import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { Menu, MenuService } from './../admin-services/menu.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {
  @ViewChild('myTable') table: DatatableComponent;
  @ViewChild('myFilterTable') myFilterTable: DatatableComponent;


  menuDetails: Menu = {
    title: '',
    url: ''
  }

  temp = [];
  rows = [];
  cols = [ {name: ''}]


  displayedColumns = ['id', 'title', 'url', 'actions'];

  constructor(private menus: MenuService, public dialog: MatDialog) { }


  ngOnInit() {
    this.menus.getMenus().subscribe((data: any) => {
      this.temp = [...data];
      this.rows = data;
    });
    // this.table.offset = 0;
  }

  addMenu() {
    this.menus.addMenu(this.menuDetails);
  }

  // updateFilter(event) {
  //   const val = event.target.value.toLowerCase();

  //   const temp = this.temp.filter(function (d){
  //     return d.title.toLowerCase().indexOf(val) !== -1 || !val;
  //   });

  //   this.rows = temp;
  //   this.myFilterTable.offset = 0;
  // }


  editMenu(menuId, menu: Menu) {
    this.menus.updateMenu(menuId, menu);
  }

  deleteMenu(menuId) {
    this.menus.deleteMenu(menuId);
  }

  openDialog(menuId): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'true'){
        console.log('The dialog was closed ' + menuId);
        this.deleteMenu(menuId);
      }
    });
  }

  openEditDialog(menuId: string, title: string, url: string): void {
    const dialogRef = this.dialog.open(EditMenuComponent, {
      width: '250px',
      data: { title, url}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('The dialog was closed');
        this.editMenu(menuId, result);
      }
    });
  }

}
