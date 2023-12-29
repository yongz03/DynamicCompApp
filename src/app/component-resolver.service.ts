import { Injectable, Type } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComponentResolverService {
  getComponentType(component: string): Observable<Type<unknown>> {
    switch (component) {
      case 'car':
        return from(
          (async () => {
            const { CarComponent } = await import(
              './car/car.component'
            );
            return CarComponent;
          })()
        );
      case 'motorbike':
        return from(
          (async () => {
            const { MotorbikeComponent } = await import(
              './motorbike/motorbike.component'
            );
            return MotorbikeComponent;
          })()
        );
      default:
        throw new Error(
          `ComponentResolverService error. Cannot resolve component of type: ${component}`
        );
    }
  }
}