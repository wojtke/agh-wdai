import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountService, AlertService } from 'src/app/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
  ) {
    if (this.accountService.user != null) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.register(this.form.value)
      .subscribe(
        res => {
          switch (res) {
            case 200:
              this.router.navigate(['../login'], { relativeTo: this.route });
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
