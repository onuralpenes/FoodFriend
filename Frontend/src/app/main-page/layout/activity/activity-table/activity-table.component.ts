import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from 'src/app/helpers/alert.service';
import { PersonalEnergyActivity } from 'src/app/models/data/energy-activity.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
  selector: 'app-activity-table',
  templateUrl: './activity-table.component.html',
  styleUrls: ['./activity-table.component.css'],
})
export class ActivityTableComponent {
  activityWithFilter: PersonalEnergyActivity[] = [];
  activityWithoutFilter: PersonalEnergyActivity[] = [];
  first = 0;
  rows = 10;
  searchText = "";

  constructor(private translate: TranslateService, private entityService: HttpEntityRepositoryService<PersonalEnergyActivity>, private alertService: AlertService) {
    entityService.getAll("/PersonalEnergyActivity/GetAll").subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }

      this.activityWithFilter = Data.data;
      this.activityWithoutFilter = Data.data;
    });
  }
  keyup(searchText) {
    this.searchText = searchText;
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
    return this.activityWithFilter ? this.first === (this.activityWithFilter.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.activityWithFilter ? this.first === 0 : true;
  }
}
