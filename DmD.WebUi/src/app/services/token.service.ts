import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TokenService {

  public token = new Subject<any>();

  constructor() { }

  public getToken() {
    return this.token.asObservable();
  }

  public setToken(token) {
    this.token.next(token);
  }
}
