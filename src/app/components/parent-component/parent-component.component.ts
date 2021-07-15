import { Console } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit {

  public msg: string = '父组件data'

  constructor() { }

  ngOnInit(): void {
  }

  changeData(): void {
    this.msg = 'new 父组件data'
  }

  run(): void {
    console.log('我是父组件方法');
  }
}
