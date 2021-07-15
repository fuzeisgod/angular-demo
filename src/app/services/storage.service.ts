import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  get(key: string) {
    let value: string = localStorage.getItem(key) || '[]'
    return JSON.parse(value)
  }

  remove(key: string) {
    localStorage.removeItem(key)
  }
}
