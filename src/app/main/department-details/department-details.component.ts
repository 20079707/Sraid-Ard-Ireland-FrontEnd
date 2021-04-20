import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../models/Category';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ApiService } from '../../api.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  category!: Category;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCategory()
  }

  getCategory(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getCategory(id)
      .subscribe(category => this.category = category);
  }

}
