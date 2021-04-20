import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './main/cart/cart.component';
import { DepartmentComponent } from './main/department/department.component';
import { DepartmentDetailsComponent } from './main/department-details/department-details.component';
import { HomeComponent } from './main/home/home.component';
import { MainComponent } from './main/main.component';
import { ProductDetailsComponent } from './main/product-details';
import { ProductListComponent } from './main/product-list/product-list.component';
import { ShopComponent } from './main/shop/shop.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'main/home' },
    {
        path: 'main', component: MainComponent,
        children: [
            {path: 'shops', component: ProductListComponent},
            {path: 'home', component: HomeComponent},
            {path: 'products', component: ProductListComponent},
            {path: 'department', component: DepartmentComponent},
            {path: 'shop', component: ShopComponent},
            {path: 'cart', component: CartComponent},
            {path: 'products/productdetails/:product_code', component: ProductDetailsComponent},
            {path: 'department/details/:id', component: DepartmentDetailsComponent},
            
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }