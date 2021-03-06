import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'

interface TokenObj {
  token: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm = new FormGroup({

    username: new FormControl(''),
    password: new FormControl('')
  });

  registerMode = false;

  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const urToken = this.cookieService.get('ur-token')
    if (urToken) {
      this.router.navigate(['main/home']);
    }
  }

  saveForm() {
    if (!this.registerMode) {
      this.loginUser();
    } else {
      this.apiService.registerUser(this.authForm.value).subscribe(
        (result: any) => {
          this.loginUser();
        },
        error => console.log(error)
      );
    }
  }

loginUser() {
  this.apiService.loginUser(this.authForm.value).subscribe(
    (result: any) => {
      this.router.navigate(['main/home']);
      this.cookieService.set("ur-token", result.token);
    },
    error => console.log(error)
  );
}
}
