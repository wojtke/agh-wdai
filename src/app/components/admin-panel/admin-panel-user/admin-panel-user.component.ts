import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models";
import {UserService} from "../../../services/user.service";
import {timer} from "rxjs";

@Component({
  selector: 'app-admin-panel-user',
  templateUrl: './admin-panel-user.component.html',
  styleUrls: ['./admin-panel-user.component.css']
})
export class AdminPanelUserComponent implements OnInit {
  @Input() user!: User;
  @Input() banned!: boolean;

  roles = ['user', 'manager', 'admin'];

  banChangeLoading = false;
  roleChangeLoading = false;


  banChange() {
    if (this.banned) {
      this.banChangeLoading = true;
      this.userService.ban(this.user)
        .subscribe(
          res => {
            if (res == 200) {
              this.banChangeLoading = false;
            }
          },
          error => {
            console.log(error);
            this.banChangeLoading = false;
          });

    } else {
      this.banChangeLoading = true;
      this.userService.unban(this.user)
        .subscribe(
          res => {
            if (res == 200) {
              this.banChangeLoading = false;
            }
          },
          error => {
            console.log(error);
            this.banChangeLoading = false;
          });
    }
  }

  roleChange() {
    this.roleChangeLoading = true;
    this.userService.changeRole(this.user, this.user.role)
      .subscribe(
        res => {
            this.roleChangeLoading = false;
        },
        error => {
          console.log(error);
          this.roleChangeLoading = false;
        });
  }


  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
