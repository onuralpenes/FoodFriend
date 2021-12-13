import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FoodDetail } from 'src/app/models/data/food-detail.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
  providers: [MessageService]
})
export class FoodListComponent {
  foods: FoodDetail[] = [];
  first = 0;
  rows = 10;

  constructor(entityService: HttpEntityRepositoryService<FoodDetail>, private messageService: MessageService) {
    entityService.getAll("/FoodDetail/GetAll").subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return;
      }
      this.foods = Data.data;
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
    return this.foods ? this.first === (this.foods.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.foods ? this.first === 0 : true;
  }
}
