import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AccountService} from "../services";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.accountService.refreshUserDetails().then(() => {
      const has_access = this.accountService.userHasAccess('admin');
      if (!has_access) {
        this.router.navigate(['/']);
      }
      return has_access;
    }).catch(() => {
      this.router.navigate(['/']);
      return false;
    });

  }
}
