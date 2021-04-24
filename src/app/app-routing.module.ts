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
import { ShopDetailsComponent } from './main/shop-details/shop-details.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { AddProductComponent } from './main/dashboard/add-product/add-product.component';
import { EditProductComponent } from './main/dashboard/edit-product/edit-product.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'main/home' },
    {
        path: 'main', component: MainComponent,
        children: [
            {path: 'shops', component: ProductListComponent},
            {path: 'home', component: HomeComponent},
            {path: 'products', component: ProductListComponent},
            {path: 'department', component: DepartmentComponent},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'shop', component: ShopComponent},
            {path: 'cart', component: CartComponent},
            {path: 'products/details/:product_code', component: ProductDetailsComponent},
            {path: 'dashboard/edit/:product_code', component: EditProductComponent},
            {path: 'dashboard/add', component: AddProductComponent},
            {path: 'department/details/:id', component: DepartmentDetailsComponent},
            {path: 'shop/details/:business_reg', component: ShopDetailsComponent},
            
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }