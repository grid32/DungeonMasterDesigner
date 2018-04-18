import { Component, Pipe, PipeTransform } from '@angular/core';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'DmD';
  public token;

  constructor(tokenService : TokenService) {
    tokenService.getToken().subscribe(token => {
      this.token = token;
    })
  }
}
