import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {

  // 接收父组件传来的数据
  @Input() msg: string = ''

  // 接收父组件传来的方法
  @Input() run: any

  // 接收整个父组件实例
  @Input() home: any

  constructor() { }

  ngOnInit(): void {
    console.log(this.msg)
    console.log(this.home)
  }

  ngOnChange(changes: SimpleChange) {
    console.log(changes)
  }

  runParentFunc(): void {
    this.run.call(this)
  }

}
