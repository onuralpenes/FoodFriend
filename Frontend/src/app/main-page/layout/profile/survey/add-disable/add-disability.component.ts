import { Component } from "@angular/core";
import { AlertService } from "src/app/helpers/alert.service";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
    selector: 'app-add-disability',
    templateUrl: './add-disability.component.html',
    styleUrls: ['./add-disability.component.css'],
})
export class AddDisability {

    constructor(entityService: HttpEntityRepositoryService<null>, private alertService: AlertService) { }

    addDisable(id: number) { 
        
    }
}