import { Component, OnInit } from '@angular/core';
import { CacheService, DataService } from '../../services';
import { CONSTANTS } from '../../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private token = null;
  private campaigns = [];
  private campaignsLoading = true;

  constructor(private cacheService: CacheService, private dataService: DataService) { }

  ngOnInit() {
    this.token = this.cacheService.load(CONSTANTS.tokenName);

    if(this.token) {
      this.dataService.getCampaigns().subscribe(campaigns => {
        this.campaigns = campaigns;
        this.campaignsLoading = false;
      })
    }
  }

}
