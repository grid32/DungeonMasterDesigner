import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from '../constants';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private CONSTANTS = CONSTANTS;
  private email = "";
  private password = "";
  private confirm = "";

  constructor(private dataService : DataService) { }

  ngOnInit() {
  }

  private Submit() {
    this.dataService.register({
      email: this.email, 
      password: this.password,
      confirmpassword: this.confirm
    }).subscribe(res => {

    });
  }
}
