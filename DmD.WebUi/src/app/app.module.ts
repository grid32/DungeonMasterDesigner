import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent, KeysPipe } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { MapComponent } from './map/map.component';
import { ListMapComponent } from './map//list/list.component';
import { NewMapComponent } from './map/new/new.component';
import { DetailMapComponent } from './map/detail/detail.component';
import { EditMapComponent } from './map/edit/edit.component';
import { DeleteMapComponent } from './map/delete/delete.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapComponent,
    ListMapComponent,
    NewMapComponent,
    DetailMapComponent,
    KeysPipe,
    EditMapComponent,
    DeleteMapComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
