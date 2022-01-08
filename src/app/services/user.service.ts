import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Dish, User} from "../models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersSubject = new BehaviorSubject<User[]>([]);
  bansSubject = new BehaviorSubject<any[]>([]);

  get users() {
    return this.usersSubject.asObservable();
  }

  get bans() {
    return this.bansSubject.asObservable();
  }

  getUserById(id: string) {
    return this.http.get<User>('/api/users/' + id);
  }

  refreshUsers() {
    let res_value = new BehaviorSubject<Number>(0);

    this.http.get<User[]>('/api/users/all')
      .subscribe(
        val => {
          this.usersSubject.next(val);
          res_value.next(200);
        },
        error => {
          console.log(error);
          res_value.next(error.status);
        },
      )
    return res_value.asObservable();
  }


  refreshBans() {
    let res_value = new BehaviorSubject<Number>(0);

    this.http.get<any[]>('/api/bans')
      .subscribe(
        val => {
          this.bansSubject.next(val);
          res_value.next(200);
        },
        error => {
          console.log(error);
          res_value.next(error.status);
        },
      )
    return res_value.asObservable();
  }

  ban(user: User) {
    let res_value = new BehaviorSubject<Number>(0);
    this.http.post('/api/bans', { user_id: user._id })
      .subscribe(
        val => {
          res_value.next(200);
        },
        error => {
          console.log(error);
          res_value.next(error.status);
        });
    return res_value.asObservable();
  }

  unban(user: User) {
    let res_value = new BehaviorSubject<Number>(0);

    this.http.delete('/api/bans/' + user._id )
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

  changeRole(user: User, role: string) {
    return this.http.patch('/api/users/' + user._id, { role: role })
  }

  getRoles() {
    return this.http.get<String[]>('/api/user/roles');
  }

  constructor(private http: HttpClient) { }
}
