import { MenuService } from './../admin-services/menu.service';
import { EditPostComponent } from './edit-post/edit-post.component';
import { Post, PostService } from './../admin-services/post.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @ViewChild('myTable') table: DatatableComponent;
  @ViewChild('myFilterTable') myFilterTable: DatatableComponent;


  postDetails: Post = {
    title: '',
    menu_id: '',
    content: '',
    imgLink: '',
    videoLink: ''
  };

  menuList: any;

  temp = [];
  rows = [];
  cols = [ {name: ''}]


  displayedColumns = ['id', 'title', 'url', 'actions'];

  constructor(private posts: PostService, public menus: MenuService, public dialog: MatDialog) { }


  ngOnInit() {
    this.posts.getPosts().subscribe((data: any) => {
      this.temp = [...data];
      this.rows = data;
    });
    // this.table.offset = 0;

    this.menus.getMenus().subscribe((data: any) => {
      this.menuList = data;
    })
  }

  addPost() {
    this.posts.addPost(this.postDetails);
  }

  // updateFilter(event) {
  //   const val = event.target.value.toLowerCase();

  //   const temp = this.temp.filter(function (d){
  //     return d.title.toLowerCase().indexOf(val) !== -1 || !val;
  //   });

  //   this.rows = temp;
  //   this.myFilterTable.offset = 0;
  // }


  editPost(postId, post: Post) {
    this.posts.updatePost(postId, post);
  }

  deletePost(postId) {
    this.posts.deletePost(postId);
  }

  openDialog(postId): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'true'){
        console.log('The dialog was closed ' + postId);
        this.deletePost(postId);
      }
    });
  }

  openEditDialog(postId: string, title: string, menu_id: string, content: string, imgLink: string, videoLink: string): void {
    const dialogRef = this.dialog.open(EditPostComponent, {
      width: '300px',
      data: { title, menu_id, content, imgLink, videoLink, "menus": this.menuList}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('The dialog was closed');
        this.editPost(postId, result);
      }
    });
  }

}
