import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements AfterViewInit {

  constructor(public authService: AuthService) { }

  ngAfterViewInit(): void {
  }

}
