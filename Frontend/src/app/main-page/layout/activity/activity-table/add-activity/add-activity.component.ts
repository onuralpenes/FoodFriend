import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ActivityInfoDto } from "src/app/models/data/activity/activity-info-dto.model";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
    selector: 'app-add-activity',
    templateUrl: './add-activity.component.html',
    styleUrls: ['./add-activity.component.css'],
  })
  export class AddActivity {
    activities: Observable<ActivityInfoDto>;

    constructor(entityService: HttpEntityRepositoryService<ActivityInfoDto>){
      this.activities = entityService.getAll("/PersonalEnergyActivity/GetAll")
    }
  }