import { Component, OnInit } from '@angular/core';

// 引入服务
import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keyword: string = ''

  public historyList: string[] = []

  constructor(public storage: StorageService) {

  }

  ngOnInit(): void { // 页面刷新触发的 init 生命周期函数
    console.log(this.storage.get('searchList'))

    this.historyList = this.storage.get('searchList') || []

  }
  doSearch(): void {
    if (this.historyList.indexOf(this.keyword) === -1) {
      this.historyList.push(this.keyword)

      this.storage.set('searchList', this.historyList)
    }

    this.keyword = ''
  }

  deleteHistory(key: number): void {
    this.historyList.splice(key, 1)

    this.storage.set('searchList', this.historyList)
  }

}
