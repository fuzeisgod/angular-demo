import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  /**
   * 声明属性的几种方式：
   * public：   共有属性（默认）       可以在类里使用，也可以在类外面使用
   * protected：保护类型              只有在当前类和它的子类里面可以访问
   * private：  私有                  只有在当前类才可以访问这个属性
   */

  public title: any = 'i am news'

  public content = '<h1>我是一个html标签</h1>'

  public arr = ['111', '222', '333']

  constructor() {
    // 改变属性的值
    this.title = " 改变后的news"
  }

  ngOnInit(): void {
  }

}
