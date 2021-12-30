import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PersonalEnergyActivity } from 'src/app/models/data/energy-activity.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent {
  activityWithFilter: PersonalEnergyActivity[] = [];
  activityWithoutFilter: PersonalEnergyActivity[] = [];
  first = 0;
  rows = 10;
  searchText = "";
  loaded=false;

  constructor(entityService: HttpEntityRepositoryService<PersonalEnergyActivity>, private messageService: MessageService) {
    entityService.getAll("/PersonalEnergyActivity/GetAll").subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return;
      }
      this.loaded = true;
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
