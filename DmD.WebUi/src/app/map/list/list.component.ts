import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListMapComponent implements OnInit {

  constructor(private dataService : DataService) { }

  private maps = [ ];

  ngOnInit() {
    this.dataService.getMaps().subscribe(maps => {
      this.maps = maps;
    });
  }
}
