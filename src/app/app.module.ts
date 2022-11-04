import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { Layout1Component } from './pages/layout1/layout1.component';
import { CookieService } from 'ngx-cookie-service';
import { ConsultasComponent } from './pages/consultas/consultas.component'; //https://codingpotions.com/angular-login-sesion


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Layout1Component,
    ConsultasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
