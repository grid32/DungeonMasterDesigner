import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ConstantService } from '../services/constant.service';
import { Map } from '../services/map'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private dataService : DataService, private constantService : ConstantService) { }

  private maps = [ ];
  private map = new Map("");
  private saving = false;

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
    this.constantService.mode = this.constantService.modes.Create;
  }

  public editMap(map : Map) {
    this.toggleMode(this.constantService.modes.Update);
    this.map = map;
  }

  public submitMap() {
    this.saving = true;
    this.dataService.createMap(new Map(this.map.Name))
    .subscribe(map => {
      this.maps = [...this.maps, map];
      this.constantService.mode = this.constantService.modes.Read;
      this.saving = false;
    },
    error => {
      alert("Error: " + error);
      this.saving = false;
    })
  }
}