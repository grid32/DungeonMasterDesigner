import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ConstantService } from '../services/constant.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private dataService : DataService, private constantService : ConstantService) { }

  private maps = [ ];

  public ngOnInit() {
    this.dataService.getMaps().subscribe(maps => {
      this.maps = maps;
    });
    this.constantService.mode = this.constantService.modes.Read;
  }

  public toggleMode(newMode : string) {
    this.constantService.mode = newMode;
  }

  public newMap() {
    this.dataService.addMap().subscribe(map => {
      this.maps = [...this.maps, map];
    })
  }

}