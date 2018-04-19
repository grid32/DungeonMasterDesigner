import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from '../../constants';
import { TokenService, DataService, CacheService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private user;

  constructor(private tokenService: TokenService, private router: Router, private dataService: DataService, private cacheService: CacheService) { }

  ngOnInit() {
    var userName = this.cacheService.load(CONSTANTS.tokenName).userName;
    this.dataService.getUser(userName).subscribe(user => {
      this.user = user;
    });
  }

  private Logout() {
    this.tokenService.setToken(null);
    this.router.navigateByUrl("/");
  }
}