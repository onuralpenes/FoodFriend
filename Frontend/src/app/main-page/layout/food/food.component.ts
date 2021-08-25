import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  @Output() setPageName: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log("selamfood");
    this.setPageName.emit("Food");
  }

}
