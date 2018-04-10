import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapComponent } from './map/map.component';
import { ListMapComponent } from './map/list/list.component';
import { NewMapComponent } from './map/new/new.component';
import { DetailMapComponent } from './map/detail/detail.component';
import { EditMapComponent } from './map/edit/edit.component';
import { DeleteMapComponent } from './map/delete/delete.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/maps', pathMatch: 'full' },
  { path: 'maps', redirectTo: '/maps/all', pathMatch: 'full' },
  { path: 'maps/all', component: ListMapComponent },
  { path: 'maps/new', component: NewMapComponent },
  { path: 'maps/:id/edit', component: EditMapComponent },
  { path: 'maps/:id/delete', component: DeleteMapComponent },
  { path: 'maps/:id', component: DetailMapComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }