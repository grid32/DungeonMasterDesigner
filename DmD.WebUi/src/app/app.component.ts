import { Component, Pipe, PipeTransform } from '@angular/core';
import { TokenService } from './services/token.service';
import { CONSTANTS } from './constants';
import { CacheService } from './services/cache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'DmD';
  public token;
  private showUserDrop = false;

  private Logout() {
    this.tokenService.setToken(null);
    this.router.navigateByUrl("/");
  }

  constructor(private tokenService: TokenService, private cacheService: CacheService, private router: Router) {
    tokenService.getToken().subscribe(token => {
      this.token = token;
    });

    var tokenString = localStorage[CONSTANTS.tokenName];
    this.token = this.cacheService.load(CONSTANTS.tokenName);
    this.tokenService.setToken(this.token);
  }
}
