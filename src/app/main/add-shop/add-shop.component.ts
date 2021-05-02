import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';
import { Shop } from '../../models/Shop';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css']
})
export class AddShopComponent implements OnInit {

  shop!: Shop;
  selectedFile!: File;
  progress = 0;
  imageURL: string = "/assets/img/default_image.png";
  
  shopForm!: FormGroup;
  
  constructor( 
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location,
    private router: Router,
    private cookieService: CookieService,
    private http: HttpClient,
  ) { 
    this.shopForm = this.fb.group({  // importing form group values
    description: new FormControl(''),
    shop_name: new FormControl(''),
    slogan: new FormControl(''),
    business_reg: new FormControl(''),
    logo: [''],
    address_line1: new FormControl(''),
    address_line2: new FormControl(''),
    county: new FormControl(''),
    eir_code: new FormControl(''),
    town_city: new FormControl(''),
    phone_no: new FormControl(0),
    });
  }

  uploadDocument(event: any) {  //reading, storing and setting the logo image uploaded by the user
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.shopForm.get('logo')?.setValue(event.target.files[0]);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();  // go back function
  }

  imageHeaders() {  // auth header
    const token = this.cookieService.get('ur-token')
    return new HttpHeaders({
    Authorization: `Token ${token}`
  });
  }

    

  addProduct(): void {
    
    const uploadData = new FormData(); // uploading form data to API
    uploadData.append('shop_name', this.shopForm.get('shop_name')?.value);
    uploadData.append('slogan', this.shopForm.get('slogan')?.value);
    uploadData.append('logo', this.shopForm.get('logo')?.value);
    uploadData.append('business_reg', this.shopForm.get('business_reg')?.value);
    uploadData.append('description', this.shopForm.get('description')?.value);
    uploadData.append('address_line1', this.shopForm.get('address_line1')?.value);
    uploadData.append('address_line2', this.shopForm.get('address_line2')?.value);
    uploadData.append('county', this.shopForm.get('county')?.value);
    uploadData.append('eir_code', this.shopForm.get('eir_code')?.value);
    uploadData.append('town_city', this.shopForm.get('town_city')?.value);
    uploadData.append('phone_no', this.shopForm.get('phone_no')?.value);

    this.http.post('http://127.0.0.1:8000/app/shops/', uploadData, {headers: this.imageHeaders()}).subscribe(  //post method to API
      () => this.goBack(),
      result => console.log(result),
    );

  }

}
