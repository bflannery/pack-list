import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { Http, Response, Headers, RequestOptions} from '@angular/http';


@Component({
  selector: 'pack-form',
  templateUrl: './pack-form.component.html',
  styleUrls: ['./pack-form.component.css'],
})

export class PackFormComponent {
items: Item[];
item;

model = new Item(2, 'Pants', 5);

submitted = false;

constructor(public http: Http) { }

onSubmit() {
  this.submitted = true;

}

get diagnostic() { return JSON.stringify(this.model); }

newItem() {
  this.model = new Item(42, '', );
}

}
