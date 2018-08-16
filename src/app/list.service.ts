import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  groceries:string[] = ['bread', 'butter','jam']

  getGroceries(): string[] {
    return this.groceries
  }

addItem(data) :string[] {
  this.groceries.push(data);
  return this.groceries
}

  constructor() { }
}
