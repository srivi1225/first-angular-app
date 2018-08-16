 import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css'],
  providers: [ListService]
})
export class ListServiceComponent implements OnInit {
ordereditems:string[]=[]
getOrderedItems() {
  this.ordereditems = this.listService.getGroceries();
  console.log(this.ordereditems)
}

addItem(form:any) {
  console.log(form.value.itemName)
  this.ordereditems = this.listService.addItem(form.value.itemName)
  console.log(this.ordereditems)
}
  constructor(private listService: ListService) { }

  ngOnInit() {
  }

}
