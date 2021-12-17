import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { Expert } from "src/app/models/core/expert.model";
import { AuthService } from "src/app/services/auth.service";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";


@Component({
    selector: 'app-related-experts',
    templateUrl: './related-experts.component.html',
    styleUrls: ['./related-experts.component.css']
})
export class RelatedExpertsComponent implements OnInit{ // /User/GetAllAssignmentsProfessionnelForPatient
    experts: Expert[] = [];
    constructor(private authService: AuthService, private entityService: HttpEntityRepositoryService<Expert>, private messageService: MessageService) {
        
    }
    ngOnInit(){
        this.entityService.get("/User/GetAllAssignmentsProfessionnelForPatient?patientId=", this.authService.CurrentUserId).subscribe(data => {
            var Data: any = data;
            if (!Data.success) {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
                return;
            }
            this.experts = Data.data;
        });
    }
}