import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  user: User | null = null;

  constructor(
    private http: HttpClient
  ) {}

  getUserDetails() {
    this.http.get<User>('/api/users/me')
      .subscribe(
        user => {
          this.user = user;
        },
        error => {
          console.log(error);
        },
      )
  }

  userHasAccess(role: string) {
    switch (role) {
      case 'admin':
        return this.user!=null && this.user.role=='admin';
      case 'manager':
        return this.user!=null && (this.user.role=='admin' || this.user.role=='manager');
      case 'user':
        return this.user!=null
      default:
        return true;
    }
  }

  register(user: User) {
    let res_value = new BehaviorSubject<Number>(0);

    this.http.post('/api/users/register', user)
      .subscribe(
        val => {

          res_value.next(200);
        },
        error => {
          console.log(error);
          res_value.next(error.status);
        },
      )

    return res_value.asObservable();
  }

  login(email: string, password: string) {
    let res_value = new BehaviorSubject<Number>(0);

    this.http.post('/api/users/login', {
      email: email,
      password: password
    })
      .subscribe(
        val => {
          res_value.next(200);
          this.getUserDetails();
        },
        error => {
          console.log(error);
          res_value.next(error.status);
        },
      )

    return res_value.asObservable();
  }

  logout(){
    let res_value = new BehaviorSubject<Number>(0);

    this.http.get('/api/users/logout')
      .subscribe(
        val => {
          this.user = null;
          res_value.next(200);
        },
        error => {
          res_value.next(error.status);
          console.log(error);
        },
      )

    return res_value.asObservable();
  }

}
