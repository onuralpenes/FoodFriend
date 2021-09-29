import { Component } from "@angular/core";
import { AlertService } from "src/app/helpers/alert.service";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
    selector: 'app-add-allergy',
    templateUrl: './add-allergy.component.html',
    styleUrls: ['./add-allergy.component.css'],
})
export class AddAllergy {

    constructor(entityService: HttpEntityRepositoryService<null>, private alertService: AlertService) { }

    addAllergy(id: number) { }
}