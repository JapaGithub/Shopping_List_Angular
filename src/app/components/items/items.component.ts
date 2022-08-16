import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsName } from 'src/app/models/itemsName';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  itemsName: ItemsName[] = [];
  total: number = 0;

  constructor(private itemService:ItemService) {}//inyectando dependencia

  ngOnInit(): void {
    //(this.items =[] ),

    this.items = this.itemService.getItems();


   /*  (this.itemsName = [
      {
        name: 'Titulo',
        price: 'Precio',
        quantity: 'Cantidad',
        total: 'Total',
        action: 'Accion',
      },
    ]);   */

    this.getTotal();
  
  }

  deleteItem(item: Item) {
    this.items = this.items.filter(x => x.id != item.id); //regresa todos los elementos q su id se diferente al id q estoy recibiendo en item
    this.getTotal();
  }
  
  toggleItem(item:Item){
    this.getTotal();
  }

  getTotal() {
    this.total = this.items
                .filter(item => !item.completed)
                .map(item => item.quantity * item.price)
                .reduce( (acc, item) => acc += item, 0);
  }
}
