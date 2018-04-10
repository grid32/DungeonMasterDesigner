import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Map } from '../../services/map'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteMapComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  private data : Map;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.data = new Map(params.Name);
      // this.data = JSON.parse(JSON.stringify(params));
    });
  }

  private deleteItem() {
    this.dataService.deleteMap(this.data).subscribe(response => {
      this.router.navigateByUrl('/maps/all');
    },
    error => {
      console.log("Error: " + error);
    });
  }
}
