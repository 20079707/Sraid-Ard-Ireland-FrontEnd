import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ApiService } from '../api.service';
import { FilterComponent } from './filter/filter.component';
import { CartComponent } from './cart/cart.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductItemComponent } from './product-list/product-item/product-item.component'
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { HomeComponent } from './home/home.component';
import { HomeItemComponent } from './home/home-item/home-item.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentItemComponent } from './department/department-item/department-item.component';
import { ShopComponent } from './shop/shop.component';
import { ShopItemComponent } from './shop/shop-item/shop-item.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

const routes: Routes = [
  { path: 'department', component: DepartmentComponent },
  { path: 'shop', component: ShopComponent },
];

@NgModule({
  declarations: [
    MainComponent,
    ProductListComponent,
    ProductDetailsComponent,
    FilterComponent,
    CartComponent,
    ProductItemComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CartItemComponent,
    HomeComponent,
    HomeItemComponent,
    DepartmentComponent,
    DepartmentItemComponent,
    ShopComponent,
    ShopItemComponent,
    DepartmentDetailsComponent,


  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    ApiService
  ]
})
export class MainModule { }
