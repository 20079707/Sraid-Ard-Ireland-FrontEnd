import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/models/Product';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  id = null;

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
  categories = [
    'Food & Beverages',
    'Clothing & Accessories',
    'Home & Garden',
    'Health & Beauty',
    'Sports & Leisure',
    'Electronic & Computing'
  ]
  stock = [
    'In Stock',
    'Out Of Stock',
  ]

  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0.00),
    product_description: new FormControl(''),
    quantity: new FormControl(0),
    colour: new FormControl(''),
    stock: new FormControl(''),
    shipping_fee: new FormControl(0.00),
    weight: new FormControl(0.00),
    shop: new FormControl(''),
    category: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  addProduct(): void {
    console.log(this.productForm.value)
    this.apiService.addProduct(
      this.productForm.value
      ).subscribe(
        result => console.log(result),
        error => console.log(error)
      );
  }

}

