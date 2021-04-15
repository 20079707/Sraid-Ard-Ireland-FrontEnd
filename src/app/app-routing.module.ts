import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './main/product-details';
import { ProductListComponent } from './main/product-list/product-list.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'products'},
    {path: 'productdetails', pathMatch: 'full', redirectTo: 'productdetails'},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }