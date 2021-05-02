import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryfilterPipe } from './categoryfilter.pipe';



@NgModule({
  declarations: [
    AppComponent,
  ],

  // all app impoorts
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AuthModule, // auth module
    HttpClientModule,
    MainModule, // main module
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,
    AppRoutingModule,
    

  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,
    AppRoutingModule, // exporting app routing module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
