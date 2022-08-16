import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsName } from 'src/app/models/itemsName';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() itemsName: ItemsName = new ItemsName();
  @Input() item: Item = new Item();
  @Output()deleteItem:EventEmitter<Item> = new EventEmitter();  //llamar al evento para eliminar
  @Output()toggleItem:EventEmitter<Item> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  onDelete(item:Item){
    this.deleteItem.emit(item);
  }

  onToggle(item:Item){
    item.completed = !item.completed;
    this.toggleItem.emit(item);
  }

}
