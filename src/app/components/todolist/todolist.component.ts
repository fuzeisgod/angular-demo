import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  public keyword: string = ''

  public todoList: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

  doAdd(e: any): void {
    if (e.keyCode == 13) {
      if (!this.todolistHasKeyword(this.todoList, this.keyword)) {
        this.todoList.push({
          title: this.keyword,
          status: false // false 待办, true 完成
        })
      }
    }
  }

  deleteData(key: number): void {
    this.todoList.splice(key, 1)
  }

  todolistHasKeyword(todolist: any[], keyword: string): boolean {
    for (let i = 0; i < todolist.length; i++) {
      if (todolist[i].title === keyword) {
        return true
      }
    }
    return false
  }

}
