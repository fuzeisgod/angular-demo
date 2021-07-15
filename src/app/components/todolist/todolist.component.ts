import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  public keyword: string = ''

  public todoList: any[] = []

  constructor(public storage: StorageService) {

  }

  ngOnInit(): void {
    console.log(this.storage.get('todolist'))
    this.todoList = this.storage.get('todolist') || []
  }

  doAdd(e: any): void {
    if (e.keyCode == 13) {
      if (!this.todolistHasKeyword(this.todoList, this.keyword)) {
        this.todoList.push({
          title: this.keyword,
          status: false // false 待办, true 完成
        })
        this.keyword = ''
        this.storage.set('todolist', this.todoList)
      } else {
        alert('数据已存在')
        this.keyword = ''
      }
    }
  }

  deleteData(key: number): void {
    this.todoList.splice(key, 1)
    this.storage.set('todolist', this.todoList)
  }

  todolistHasKeyword(todolist: any[], keyword: string): boolean {
    for (let i = 0; i < todolist.length; i++) {
      if (todolist[i].title === keyword) {
        return true
      }
    }
    return false
  }

  checkboxChange() {
    this.storage.set('todolist', this.todoList)
  }

}
