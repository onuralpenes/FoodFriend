import { Component } from "@angular/core";
import { AlertService } from "src/app/helpers/alert.service";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
    selector: 'app-add-illness',
    templateUrl: './add-illness.component.html',
    styleUrls: ['./add-illness.component.css'],
})
export class AddIllness {

    constructor(entityService: HttpEntityRepositoryService<null>, private alertService: AlertService) { }

    addIllness(id: number) { }
}