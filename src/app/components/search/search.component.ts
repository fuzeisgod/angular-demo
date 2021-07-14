import { Component, OnInit } from '@angular/core';

// 引入服务
import { StorageService } from '../../services/storage.service'

var storage = new StorageService()

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keyword: string = ''

  public historyList: string[] = []

  constructor() { }

  ngOnInit(): void {
  }
  doSearch(): void {
    if (this.historyList.indexOf(this.keyword) === -1) {
      this.historyList.push(this.keyword)
    }

    this.keyword = ''
  }

  deleteHistory(key:number): void {
    this.historyList.splice(key, 1)
  }

}
