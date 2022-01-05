import { Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { ProfessionalRecommendation } from "src/app/models/data/professional-recommendation.model";
import { AuthService } from "src/app/services/auth.service";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";

@Component({
    selector: 'app-recommendation-patient',
    templateUrl: './recommendation-patient.component.html',
    styleUrls: ['./recommendation-patient.component.css']
})
export class RecommendationPatientComponent {
    recommendations: ProfessionalRecommendation[] = [];
    loaded = false;

    constructor(entityService: HttpEntityRepositoryService<ProfessionalRecommendation>, private messageService: MessageService, private authService: AuthService) {
        entityService.get("/api/ProfessionalRecommendation/GetByUserId?userId=", authService.CurrentUserId).subscribe(data => {
            var Data: any = data;
            if (!Data.success) {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
                return;
            }
            this.loaded = true;
            this.recommendations = Data.data;
            console.log(this.recommendations)
        });
    }
}