import { Component, OnInit} from '@angular/core';
import { AccountService } from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.accountService.getUserDetails();
  }

  logout() {
    this.accountService.logout()
      .subscribe( res=>{
        if (res==200) {
          this.router.navigate(['/']);
        } else {
          console.log(res);
        }
      }, error=> {
        console.log(error);
      })
  }

}

