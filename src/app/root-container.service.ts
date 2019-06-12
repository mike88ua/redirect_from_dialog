import {Injectable, ViewContainerRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootContainerService {

  private _instance: ViewContainerRef = null;

  set instance(instance: ViewContainerRef) {
    this._instance = instance;
  }

  get instance() {
    return this._instance;
  }

  constructor() {
  }
}
