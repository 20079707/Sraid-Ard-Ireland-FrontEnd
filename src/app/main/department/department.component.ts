import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';
import { Category } from '../../models/Category';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  categories: Category[] = [];
  selectedCategory?: Category;

  constructor(
    private cookieService: CookieService,
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(): void {
    const urToken = this.cookieService.get('ur-token')
    if (!urToken) {
      this.router.navigate(['/auth']);
    } else {

      this.apiService.getCategories().subscribe(
        data => {
        this.categories = data;
      },
        error => console.log(error)

    );
    }
  }

}
