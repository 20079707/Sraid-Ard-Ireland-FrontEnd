import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/models/Product';
import { Location } from '@angular/common';
import { Shop } from '../../../models/Shop';
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { pipe } from 'rxjs';
import { FilterComponent } from '../../filter/filter.component';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

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
    'Electronic & Computing',
    'Books, DVDs & CDs',
    'Arts & Crafts'

  ]
  stocks = [
    'In Stock',
    'Out Of Stock',
  ]

  product!: Product;
  selectedFile!: File;
  progress = 0;
  imageURL: string = "/assets/img/default_image.png";
  
  productForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location,
    private router: Router,
    private cookieService: CookieService,
    private http: HttpClient,
  ) { 
    this.productForm = this.fb.group({
    name: new FormControl(''),
    price: new FormControl(1.00),
    product_image: [''],
    product_description: new FormControl(''),
    quantity: new FormControl(0),
    colour: new FormControl(''),
    stock: new FormControl(''),
    shipping_fee: new FormControl(0.00),
    weight: new FormControl(0.00),
    shop: new FormControl(''),
    category: new FormControl(''),
    });
  }

  uploadDocument(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.productForm.get('product_image')?.setValue(event.target.files[0]);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  imageHeaders() {
    const token = this.cookieService.get('ur-token')
    return new HttpHeaders({
    Authorization: `Token ${token}`
  });
  }

  addProduct(): void {
    
    const uploadData = new FormData();
    uploadData.append('name', this.productForm.get('name')?.value);
    uploadData.append('price', this.productForm.get('price')?.value);
    uploadData.append('product_image', this.productForm.get('product_image')?.value);
    uploadData.append('product_description', this.productForm.get('product_description')?.value);
    uploadData.append('quantity', this.productForm.get('quantity')?.value);
    uploadData.append('colour', this.productForm.get('colour')?.value);
    uploadData.append('stock', this.productForm.get('stock')?.value);
    uploadData.append('shipping_fee', this.productForm.get('shipping_fee')?.value);
    uploadData.append('weight', this.productForm.get('weight')?.value);
    uploadData.append('shop', this.productForm.get('shop')?.value);
    uploadData.append('category', this.productForm.get('category')?.value);

    this.http.post('http://127.0.0.1:8000/app/products/', uploadData, {headers: this.imageHeaders()}).subscribe(
      () => this.goBack(),
      result => console.log(result),
    );

  }
  
}

