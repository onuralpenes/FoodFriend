import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { PersonalEnergyActivity } from "src/app/models/data/energy-activity.model";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
    selector: 'app-add-activity',
    templateUrl: './add-activity.component.html',
    styleUrls: ['./add-activity.component.css'],
  })
  export class AddActivity {
    // activities: Observable<PersonalEnergyActivity>;

    // constructor(entityService: HttpEntityRepositoryService<PersonalEnergyActivity>){
    //   this.activities = entityService.getAll("/PersonalEnergyActivity/GetAll")
    // }
  }