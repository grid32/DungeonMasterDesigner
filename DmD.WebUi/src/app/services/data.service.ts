import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment.prod';
import { Map } from '../services/map'
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  constructor(private http: Http) { }

  private apiPath = environment.apiPathDev;

  public register(account) {
    return this.http.post(this.apiPath + "api/Account/Register", account, { withCredentials: true })
    .map((res : Response) => res.json());
  }

  public getMaps() {
    return this.http.get(this.apiPath + "map/all", { withCredentials: true })
    .map((res: Response) => res.json());
  }

  public getMap(id : number) {
    return this.http.get(this.apiPath + "map/" + id, { withCredentials: true })
    .map((res: Response) => res.json());
  }

  public createMap(map : Map) {
    console.log("Saving " + map.Name);
    return this.http.post(this.apiPath + "map/create", map,{ withCredentials: true })
    .map((res: Response) => res.json());
  }

  public deleteMap(map : Map) {
    console.log("Delete triggered.");
    return this.http.post(this.apiPath + "map/delete", map,{ withCredentials: true })
    .map((res: Response) => res.json());
  }
}
