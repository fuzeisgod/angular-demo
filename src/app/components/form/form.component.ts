import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public peopleInfo: any = {
    username: '',
    sex: "1",
    cities: [
      '北京',
      '上海',
      '深圳'
    ],
    city: '北京',
    hobbies: [{
      title: '吃饭',
      check: true
    }, {
      title: '睡觉',
      check: false
    }],
    mark: ''
  }


  constructor() { }

  ngOnInit(): void {
  }

  doSubmit(): void {
    console.log(this.peopleInfo)
  }

}
