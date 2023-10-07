import { Component, OnInit } from '@angular/core';
import RandomGenerator from '../helpers/random-generator.helper';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {

  public val: string = '';

  constructor() { }

  ngOnInit() {
    this.val = RandomGenerator.randomString(5)
  }

}
