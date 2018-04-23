import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONSTANTS } from '../../constants';
import { DataService, CacheService, TokenService } from '../../services/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private CONSTANTS = CONSTANTS;
  private email = "";
  private password = "";
  private confirm = "";
  private busy = false;

  constructor(
    private dataService: DataService,
    private tokenService: TokenService,
    private cacheService: CacheService,
    private router: Router) { }

  private Submit() {
    this.busy = true;
    this.dataService.register({
      email: this.email, 
      password: this.password,
      confirmpassword: this.confirm
    })
    .subscribe(registration => {
      this.dataService.login({
        email: this.email, 
        password: this.password,
      })
      .subscribe(token => {
        this.cacheService.save(CONSTANTS.tokenName, token);
        this.tokenService.setToken(token);
        this.router.navigateByUrl('/');
      },
      loginError => {
        this.busy = false;
        if(typeof(loginError._body) === typeof("")) {
          alert(JSON.parse(loginError._body).error_description);
        }
        else {
          alert("An unexpected error occurred.");
        }
      })
    },
    registerError => {
      this.busy = false;
        if(typeof(registerError._body) === typeof("")) {
          alert(registerError._body);
        }
        else {
          alert("An unexpected error occurred.");
        }
    });
  }
}
