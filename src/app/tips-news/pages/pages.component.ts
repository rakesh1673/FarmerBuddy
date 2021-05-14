import { ActivatedRoute } from '@angular/router';
import { PostService } from './../../admin/admin-services/post.service';
import { MenuService } from './../../admin/admin-services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  menu: any;
  postList: any;
  menuList: any;

  constructor(private menus: MenuService, private posts: PostService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.menus.getConditionalMenus("url", "==", params.url).subscribe(menus => {
        console.log(menus);
        if(menus.length > 0) {
          this.menu = menus[0];
          this.posts.getConditionalPosts('menu_id', '==', this.menu.id).subscribe(posts => {
            console.log(posts);
            this.postList = posts;
          });
        }
      });
    });
  }

  ngOnInit(): void {
    this.menus.getMenus().subscribe(menus => {
      this.menuList = menus;
    });
  }

}
