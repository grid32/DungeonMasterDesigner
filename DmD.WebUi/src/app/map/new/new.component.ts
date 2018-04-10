import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Map } from '../../services/map'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewMapComponent implements OnInit {

  constructor(private dataService : DataService, private router : Router) { }

  private map = new Map("");
  private saving = false;

  ngOnInit() {
  }

  public submitMap() {
    this.saving = true;
    this.dataService.createMap(new Map(this.map.Name))
    .subscribe(map => {
      this.router.navigate(['/maps/all']);
    },
    error => {
      alert("Error: " + error);
      this.saving = false;
    })
  }
}
