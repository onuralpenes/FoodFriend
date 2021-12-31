import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AllergyDetail } from 'src/app/models/user/health-info/allergy-detail.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
    selector: 'app-allergy-transactions',
    templateUrl: './allergy-transactions.component.html'
})
export class AllergyTransactionsComponent {
    allergyList: AllergyDetail[] = [];
    constructor(private entitiyService: HttpEntityRepositoryService<AllergyDetail>, private messageService: MessageService, private confirmationService: ConfirmationService) {
        this.entitiyService.getAll("/AllergyDetail/GetAll").subscribe(data => {
            var Data: any = data;
            if (!Data.success) {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
              return;
            }
            this.allergyList = Data.data;
        })
    }
}