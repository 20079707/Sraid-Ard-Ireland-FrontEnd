import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './main/cart/cart.component';
import { DepartmentComponent } from './main/department/department.component';
import { HomeComponent } from './main/home/home.component';
import { MainComponent } from './main/main.component';
import { ProductDetailsComponent } from './main/product-details';
import { ProductListComponent } from './main/product-list/product-list.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'main/products' },
    {
        path: 'main', component: MainComponent,
        children: [
            {path: 'shops', component: ProductListComponent},
            {path: 'home', component: HomeComponent},
            {path: 'products', component: ProductListComponent},
            {path: 'department', component: DepartmentComponent},
            {path: 'cart', component: CartComponent},
            {path: 'product-details/:id', component: ProductDetailsComponent},
            
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }