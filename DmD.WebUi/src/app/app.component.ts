import { Component, Pipe, PipeTransform } from '@angular/core';
import { TokenService } from './services/token.service';
import { CONSTANTS } from './constants';
import { CacheService } from './services/cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'DmD';
  public token;

  constructor(private tokenService: TokenService, private cacheService: CacheService) {
    tokenService.getToken().subscribe(token => {
      this.token = token;
    });

    var tokenString = localStorage[CONSTANTS.tokenName];
    this.token = this.cacheService.load(CONSTANTS.tokenName);
    this.tokenService.setToken(this.token);
  }
}
