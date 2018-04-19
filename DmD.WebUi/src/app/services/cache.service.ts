import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {

  constructor() { }

  public save(key: string, data : any) {
    localStorage[key] = JSON.stringify(data);
  }

  public load(key: string) {
    var str = localStorage[key];
    if(str) {
      var obj = JSON.parse(str);
      if(obj[".expires"]) {
        var expiry = new Date(obj[".expires"]);
        if(expiry < new Date()) {
          localStorage.removeItem(key);
          str = null;
        }
      }
    }
    return str ? JSON.parse(str) : null;
  }
}
