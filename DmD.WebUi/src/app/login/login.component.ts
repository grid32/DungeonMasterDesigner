import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from '../constants';
import { DataService } from '../services/data.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private CONSTANTS = CONSTANTS;
  private email = "";
  private password = "";

  constructor(private dataService: DataService, private tokenService : TokenService, private router : Router) { }

  ngOnInit() {
  }

  private Submit() {
    this.dataService.login({
      email: this.email, 
      password: this.password,
    }).subscribe(token => {
      this.tokenService.setToken(token);
      this.router.navigateByUrl('/maps');
    });
  }
}
