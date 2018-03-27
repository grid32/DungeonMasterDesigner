import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService : DataService) { }

  private maps = [ ];

  public ngOnInit() {
    this.dataService.getMaps().subscribe(maps => {
      this.maps = maps;
    });
  }

  public newMap() {
    this.dataService.addMap().subscribe(map => {
      this.maps = [...this.maps, map];
    })
  }

}
