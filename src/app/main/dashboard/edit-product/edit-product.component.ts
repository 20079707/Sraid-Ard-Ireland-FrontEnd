import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product!: Product;
  colours = [
    'Red',
    'Blue',
    'Orange',
    'Yellow',
    'White',
    'Black',
    'Navy',
    'Brown',
    'Purple',
    'Pink'
  ]

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(): void {
    const product_code = Number(this.route.snapshot.paramMap.get('product_code'));
    this.apiService.getProduct(product_code)
      .subscribe(product => this.product = product);
  }

  saveProduct(): void {

  }

  goBack(): void {
    
  }

}
