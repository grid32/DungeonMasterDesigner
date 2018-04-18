import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {

  constructor() { }

  public save(key: string, data : any) {
    localStorage[key] = JSON.stringify(data);
  }

  public load(key: string) {
    var str = localStorage[key];
    return str ? JSON.parse(str) : null;
  }
}
