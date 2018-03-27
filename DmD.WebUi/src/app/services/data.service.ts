import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment.prod';
import { Map } from '../services/map'
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  constructor(private http: Http) { }

  private apiPath = environment.apiPath;

  public getMaps() {
    return this.http.get(this.apiPath + "map/all", { withCredentials: true})
    .map((res: Response) => res.json());
  }

  public addMap(map : Map) {
    console.log("Saving " + map.Name);
    return this.http.post(this.apiPath + "map/add", {id: 0, name: "Test"},{ withCredentials: true})
    .map((res: Response) => res.json());
  }
}
