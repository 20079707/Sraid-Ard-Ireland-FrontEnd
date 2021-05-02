import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  signedIn = true;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.cookieService.delete('ur-token');
    this.router.navigate(['/auth']);

  }

  loginUser() {
    this.router.navigate(['/auth']);

  }

}
