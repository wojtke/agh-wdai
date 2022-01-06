import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AccountService} from "../services";

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.accountService.refreshUserDetails().then(() => {
      const has_access = this.accountService.userHasAccess('user');
      if (!has_access) {
        this.router.navigate(['/login']);
      }
      return has_access;
    }).catch(() => {
      this.router.navigate(['/login']);
      return false;
    });

  }
}
