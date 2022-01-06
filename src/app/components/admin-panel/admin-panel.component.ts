import { Component, OnInit } from '@angular/core';
import {User} from "src/app/models";
import {timer} from "rxjs";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  users: User[] = [];
  bans: any[] = [];
  loading: boolean = true;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.loading = true;
    this.userService.refreshUsers();
    this.userService.refreshBans();
    this.userService.users.subscribe(data => {
      this.users = data;
    });
    this.userService.bans.subscribe(data => {
      this.bans = data;
    });
    timer(3000).subscribe( val=> {this.loading = false;})
  }

}
