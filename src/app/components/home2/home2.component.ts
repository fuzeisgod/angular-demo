import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {

  // 获取 dom 节点
  @ViewChild('myBox') myBox: any
  // 获取一个组件
  @ViewChild('header') header:any
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    // 调用 dom 节点
    console.log(this.myBox.nativeElement)
    this.myBox.nativeElement.style.color = 'blue'

    // 调用子组件里的方法
    this.header.run()
  }

}
