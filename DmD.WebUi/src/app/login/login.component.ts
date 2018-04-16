import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from '../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private CONSTANTS = CONSTANTS;

  constructor() { }

  ngOnInit() {
  }

}
