import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CONSTANTS } from '../constants';

@Injectable()
export class TokenService {

  public token = new Subject<any>();

  constructor() { }

  public getToken() {
    return this.token.asObservable();
  }

  public setToken(token) {
    this.token.next(token);
    if(token === null) {
      localStorage.removeItem(CONSTANTS.tokenName);
    }
  }
}
