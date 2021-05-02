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
import { ProductItemComponent } from './product-item/product-item.component'
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
import { FormsModule } from '@angular/forms';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './dashboard/add-product/add-product.component';
import { EditProductComponent } from './dashboard/edit-product/edit-product.component';
import { CategoryfilterPipe } from './../categoryfilter.pipe';
import { AddShopComponent } from './add-shop/add-shop.component';

const routes: Routes = [  // some required routes in this module
  { path: 'department', component: DepartmentComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'dashboard', component: DashboardComponent },
  
  
];

@NgModule({
  declarations: [ // all component declared in this module
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
    ShopDetailsComponent,
    DashboardComponent,
    AddProductComponent,
    EditProductComponent,
    CategoryfilterPipe,
    AddShopComponent


  ],
  imports: [  // imports from app module
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [  // export router to components in module
    RouterModule,
  ],
  providers: [  // makes api service available to any cmponent in this module
    ApiService
  ]
})
export class MainModule { }
