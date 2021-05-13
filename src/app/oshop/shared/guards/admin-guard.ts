import { AuthService } from './../services/auth.service';
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    if (this.authService.isLoggedIn$ && this.authService.isAdmin$) {
      return true;
    }
    this.router.navigate(['no-access']);
    return false;
  }

}
