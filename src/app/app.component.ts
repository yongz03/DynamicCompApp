import { Component, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';

import { ComponentResolverService } from './component-resolver.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('componentContainer', { read: ViewContainerRef, static: true })
  componentContainer: ViewContainerRef | undefined;

  currentVehicle$ = new BehaviorSubject<'car' | 'motorbike'>('car');
  component$ = this.getComponent();

  constructor(private componentResolverService: ComponentResolverService) {}

  onVehicleToogle(): void {
    const nextVehicle =
      this.currentVehicle$.getValue() === 'car' ? 'motorbike' : 'car';
    this.currentVehicle$.next(nextVehicle);
  }

  getComponent(): Observable<Type<unknown>> {
    return this.currentVehicle$.pipe(
      switchMap((currentVehicle) => {
        return this.componentResolverService.getComponentType(currentVehicle);
      }),
      tap((componentType) => {
        const viewContainerRef = this.componentContainer;
        viewContainerRef?.clear();

        const componentRef =
          viewContainerRef?.createComponent<unknown>(componentType);
        componentRef?.setInput('title', this.currentVehicle$.getValue());
      })
    );
  }
}