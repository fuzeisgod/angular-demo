import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public flag:boolean = true

  constructor() { }

  ngOnInit(): void {
    // 组件和指令初始化完成 并不是真正的 dom 加载完成

    let oBox: any = document.getElementById('box');
    console.log(oBox.innerHTML)
    oBox.style.color = 'red'

    // 获取不到 dom 节点
    // let oBox1: any = document.getElementById('box1');
    // console.log(oBox1.innerHTML)
    // oBox1.style.color = 'red'
  }

  ngAfterViewInit():void{ // 视图加载完成以后的生命周期
    let oBox1: any = document.getElementById('box1');
    console.log(oBox1.innerHTML)
    oBox1.style.color = 'red'
  }

}
