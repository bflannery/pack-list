import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'pack-list',
  templateUrl: './pack-list.component.html',
  styleUrls: ['./pack-list.component.css'],
  providers: [ItemService]
})
export class PackListComponent implements OnInit {
  items: any = [];
  selectedItem: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getAllItems().subscribe(items => {
      this.items = items;
    });
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }
}
