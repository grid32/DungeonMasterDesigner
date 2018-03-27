import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConstantService {
  constructor() { }

  public modes = { Create: "c", Read: "r", Update: "u", Delete: "d" };
  public mode = this.modes.Read;
}
