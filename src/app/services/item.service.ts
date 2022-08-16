import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    {
      id: 0,
      title: 'manzana',
      price: 100,
      quantity: 2,
      completed: false,
    },
    {
      id: 1,
      title: 'aguacate',
      price: 200,
      quantity: 1,
      completed: false,
    },
    {
      id: 2,
      title: 'campera',
      price: 35000,
      quantity: 1,
      completed: false,
    },
  ];

  constructor() { }

  getItems(){
    
    return this.items;
  }

  addItem(item: Item){
    this.items.unshift(item);
  }
}
