import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, LoginRouteGuard } from './app-routing.module';

import { 
  LoginComponent,
  RegisterComponent,
  HomeComponent
} from './views/index'

import { DataService, TokenService, CacheService } from './services/index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService,
    TokenService,
    CacheService,
    LoginRouteGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
