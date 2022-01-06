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
  banSwitch!: boolean;

  banChange() {
    if (this.banSwitch) {
      this.userService.ban(this.user)
        .subscribe(
          res => {
            if (res==200) {
              this.banned = true;
            }
          });
    } else {
      this.userService.unban(this.user)
        .subscribe(
          res => {
            if (res==200) {
              this.banned = false;
            }
          });
    }
  }


  constructor(public userService: UserService) { }

  ngOnInit(): void {
    timer(200).subscribe( () =>this.banSwitch = this.banned);

  }

}
