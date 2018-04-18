import { NgModule, Injectable } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { 
  LoginComponent,
  RegisterComponent,
  HomeComponent
} from './views/index'

import { CacheService } from './services/index'

import { CONSTANTS } from './constants';

@Injectable()
export class LoginRouteGuard implements CanActivate {
  constructor(private cacheService: CacheService) { }

  canActivate() {
    return this.cacheService.load(CONSTANTS.tokenName) === null ? true : false;
  }
}

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginRouteGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [LoginRouteGuard] }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }