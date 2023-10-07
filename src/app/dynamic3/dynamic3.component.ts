import { Component, OnInit } from '@angular/core';
import RandomGenerator from '../helpers/random-generator.helper';

@Component({
  selector: 'app-dynamic3',
  templateUrl: './dynamic3.component.html',
  styleUrls: ['./dynamic3.component.scss']
})
export class Dynamic3Component implements OnInit {

  public val: string = '';

  constructor() { }

  ngOnInit() {
    this.val = RandomGenerator.randomString(5)
  }

}
