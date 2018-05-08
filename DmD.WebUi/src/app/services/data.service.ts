import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment.prod';
import { Map, Campaign } from '../models/index'
import 'rxjs/add/operator/map';
import { CacheService } from '.';
import { CONSTANTS } from '../constants';

@Injectable()
export class DataService {
  constructor(private http: Http) { }

  private apiPath = environment.apiPath;
  private getTokenHeader(token) {
    var options = new RequestOptions();
    options.headers = new Headers({
      "Authorization": "bearer " + token
    });
    return options;
  }

  public register(account) {
    return this.http.post(this.apiPath + "account/register", account)
    .map((res : Response) => res.json());
  }

  public login(account) {
    return this.http.post(this.apiPath + "token", "grant_type=password&username=" + account.email + "&password=" + account.password)
    .map((res : Response) => res.json());
  }

  public getCampaigns() {
    return this.http.get(this.apiPath + "campaigns/mine")
    .map((res: Response) => res.json().map(c => new Campaign(c)));
  }
}
