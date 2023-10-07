import { Component, OnInit } from '@angular/core';
import RandomGenerator from '../helpers/random-generator.helper';

@Component({
  selector: 'app-dynamic2',
  templateUrl: './dynamic2.component.html',
  styleUrls: ['./dynamic2.component.scss']
})
export class Dynamic2Component implements OnInit {

  public val: string = '';

  constructor() { }

  ngOnInit() {
    this.val = RandomGenerator.randomString(5)

  }

}
