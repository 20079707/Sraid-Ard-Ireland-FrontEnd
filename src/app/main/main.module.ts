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


const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'productdetails', component: ProductDetailsComponent}
];

@NgModule({
  declarations: [
    MainComponent,
    ProductListComponent,
    ProductDetailsComponent,
    FilterComponent,
    CartComponent,
    ProductItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    ApiService
  ]
})
export class MainModule { }
