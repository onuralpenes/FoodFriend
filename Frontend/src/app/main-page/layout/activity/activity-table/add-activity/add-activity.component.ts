import { Component } from "@angular/core";
import { AlertService } from "src/app/helpers/alert.service";
import { PersonalEnergyActivity } from "src/app/models/data/energy-activity.model";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css'],
})
export class AddActivity {
  activities: PersonalEnergyActivity[] = [];

  constructor(entityService: HttpEntityRepositoryService<PersonalEnergyActivity>, private alertService: AlertService) {
    entityService.getAll("/FoodDetail/GetAll").subscribe(data => {

      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }

      this.activities = Data.data;
    });
  }

  addActivity(id: number){

  }
}