import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONSTANTS } from '../../constants';
import { DataService, TokenService, CacheService } from '../../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private CONSTANTS = CONSTANTS;
  private busy = false;
  private email = '';
  private password = '';

  constructor(
    private dataService: DataService, 
    private tokenService: TokenService, 
    private router: Router, 
    private cacheService: CacheService) { }

  private Submit() {
    this.busy = true;
    this.dataService.login({
      email: this.email, 
      password: this.password,
    }).subscribe(token => {
      this.cacheService.save(CONSTANTS.tokenName, token);
      this.tokenService.setToken(token);
      this.router.navigateByUrl('/');
    },
    error => {
      this.busy = false;
      if(typeof(error._body) === typeof("")) {
        alert(JSON.parse(error._body).error_description);
      }
      else {
        alert("An unexpected error occurred.");
      }
    });
  }
}
