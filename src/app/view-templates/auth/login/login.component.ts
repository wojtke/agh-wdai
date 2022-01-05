import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import {AccountService, AlertService} from "../../../services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute,

  ) {
    if (this.accountService.user != null) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;


    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.login(this.f.email.value, this.f.password.value)
      .subscribe(
        res => {
          switch (res) {
            case 200:
              this.router.navigate([this.returnUrl]);
              this.loading = false;
              break;
            case 401:
              console.log("Wrong credentials");
              this.loading = false;
              break;
            case 400:
              console.log("Something went wrong with the request");
              this.loading = false;
              break;
            case 500:
              console.log("Internal error");
              this.loading = false;
              break;
          }
        },
        error => {
          console.log(error)
          this.loading = false;
        });

  }
}
