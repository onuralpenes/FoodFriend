import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FoodDetail } from 'src/app/models/data/food-detail.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  foodsWithFilter: FoodDetail[] = [];
  foodsWithoutFilter: FoodDetail[] = [];
  first = 0;
  rows = 10;
  loaded = false;
  searchText: string = "";

  constructor(entityService: HttpEntityRepositoryService<FoodDetail>, private messageService: MessageService) {
    entityService.getAll("/FoodDetail/GetAll").subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return;
      }
      this.foodsWithFilter = Data.data;
      this.foodsWithoutFilter = Data.data;
      this.loaded = true;
    });
  }
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.foodsWithFilter ? this.first === (this.foodsWithFilter.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.foodsWithFilter ? this.first === 0 : true;
  }

  keyup(searchText) {
    this.searchText = searchText;
  }
}
