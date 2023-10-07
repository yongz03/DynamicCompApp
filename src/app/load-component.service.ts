import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadComponentService {

  constructor() { }

  async load(viewContainerRef: ViewContainerRef, component: any) {
 
    viewContainerRef.clear();

    return viewContainerRef.createComponent(component);
  }
}
