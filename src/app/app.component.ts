// 引人核心模块里面的 Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // 使用这个组件的名称
  templateUrl: './app.component.html', // html
  styleUrls: ['./app.component.scss'] // css
})
export class AppComponent {
  title = 'angular-demo'; // 定义属性
}
