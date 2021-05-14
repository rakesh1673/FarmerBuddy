import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route, state: RouterStateSnapshot) {
    return this.authService.isLoggedIn$.pipe(
      tap((allowed) => {
        if(!allowed) {
          this.router.navigate(['/login'], {
            queryParams: { returnUrl: state.url}
          });
        }
      })
    );
  }
}
