import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../models/Category';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ApiService } from '../../api.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  category!: Category;
  products: Product[] = []
  selectedProduct?: Product;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategory()
    this.getProducts()
  }

  getCategory(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getCategory(id)
      .subscribe(category => this.category = category);
  }

  getProducts(): void {
    this.apiService.getProducts().subscribe(
      data => {
        this.products = data;
        console.log('selectedProduct', this.products);
      },
      error => console.log(error)
    );
  }

  selectProduct(product: Product) {
    this.router.navigate(['main/products/details', product.product_code]);
  }


}
