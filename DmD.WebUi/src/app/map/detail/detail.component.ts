import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Map } from '../../services/map'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailMapComponent implements OnInit {

  private data : Map;
  private id;

  constructor(private route: ActivatedRoute, private dataService : DataService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.dataService.getMap(this.id)
      .subscribe(map => {
        this.data = map;
      });
    });
  }
}
