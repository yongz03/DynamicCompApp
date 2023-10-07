import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { DynamicDirective } from './dynamic.directive';
import { LoadComponentService } from './load-component.service';
import { DynamicComponent } from './dynamic/dynamic.component';
import { Dynamic2Component } from './dynamic2/dynamic2.component';
import { Dynamic3Component } from './dynamic3/dynamic3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'AppComponent';
  compArray = [DynamicComponent, Dynamic2Component, Dynamic3Component]

  @ViewChild(DynamicDirective, { static: true }) dynamicDirective!: DynamicDirective;

  constructor(private loadComponentService: LoadComponentService) { }

  ngOnInit(): void { }


  public loadDynamicComponent(event: any) {
    // Get a random component
    const item = this.compArray[Math.floor(Math.random()*this.compArray.length)];

    const containerRef = this.dynamicDirective.viewContainerRef;
    this.loadComponentService.load(containerRef, item);
  }

}
