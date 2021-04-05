import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';

import { AuthModule } from './components/auth/auth.module';
import { MainModule } from './components/main/main.module';


import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'products'}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ComponentsComponent,
    
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HttpClientModule,
    MainModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
