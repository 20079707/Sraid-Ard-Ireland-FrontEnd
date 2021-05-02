import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ApiService } from '../../../api.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { Shop } from 'src/app/models/Shop';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  onFileSelected(event: any) {
    console.log(event)
  }

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
  shops: Shop[] = []

  imageURL!: string; 

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location,
    private fb: FormBuilder
  ) {

   }

  ngOnInit(): void {
    this.getProduct()
  }



  getProduct(): void {
    const product_code = Number(this.route.snapshot.paramMap.get('product_code'));
    this.apiService.getProduct(product_code)
      .subscribe(product => this.product = product);
  }

  saveProduct(): void {
      this.apiService.updateProduct(this.product.product_code, this.product)
        .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  

}
