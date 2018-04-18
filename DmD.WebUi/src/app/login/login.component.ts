import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from '../constants';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private CONSTANTS = CONSTANTS;
  private email = "";
  private password = "";

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  private Submit() {
    this.dataService.login({
      email: this.email, 
      password: this.password,
    }).subscribe(res => {

    });
  }
}
