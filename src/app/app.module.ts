// angular 核心模块
import { NgModule } from '@angular/core';
// BrowserModule 浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
// angular 表单模块, 引入该模块才可以数据双向绑定
import { FormsModule } from '@angular/forms'

// 引入并配置服务
import { StorageService } from './services/storage.service' 

import { AppRoutingModule } from './app-routing.module';
// 根组件
import { AppComponent } from './app.component';
// 新闻组件
import { NewsComponent } from './components/news/news.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';

// @NgModule 装饰器，接收一个元数据对象，告诉angular如何编译和启动应用
@NgModule({
  declarations: [ /**配置当前项目运行的组件 */
    AppComponent, NewsComponent, FormComponent, SearchComponent, TodolistComponent
  ],
  imports: [ /**配置当前模块运行依赖的其他模块 */
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StorageService], /**配置项目所需要的服务 */
  bootstrap: [AppComponent] /**指定应用的主视图，就是启动展示的组件（一般为根组件） 通过引导根 AppModule 来启动应用 */
})

// 根模块不需要导出任何东西，因为其他组件不需要导入根模块
export class AppModule { }
