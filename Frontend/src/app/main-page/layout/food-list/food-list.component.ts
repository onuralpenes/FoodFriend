import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from 'src/app/helpers/alert.service';
import { FoodDetail } from 'src/app/models/data/food-detail.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  foods: FoodDetail[] = [];
  isNull: boolean = true;
  first = 0;
  rows = 10;

  constructor(private entityService: HttpEntityRepositoryService<FoodDetail>, private translate: TranslateService, private alertService: AlertService) {
    entityService.getAll("/FoodDetail/GetAll").subscribe(data => {

      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }

      this.foods = Data.data;

      this.Begin();
    });
  }
  Begin() {
    // if (this.dataSource.filteredData.length == 0) {
    //   this.isNull = false;
    // }
    // else {
    //   this.isNull = true;
    // }
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
