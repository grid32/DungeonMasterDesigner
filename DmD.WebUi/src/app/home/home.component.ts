import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  private maps = [ ];

  public ngOnInit() {
    this.maps = [ { Id: 0, Name: 'Map0' } ];
  }

}
