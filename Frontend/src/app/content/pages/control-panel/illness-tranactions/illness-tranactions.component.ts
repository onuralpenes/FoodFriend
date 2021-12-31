import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IllnessDetail } from 'src/app/models/user/health-info/illness-detail.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
    selector: 'app-illness-tranactions',
    templateUrl: './illness-tranactions.component.html'
})
export class IllnessTransactionsComponent {
    constructor(private entitiyService: HttpEntityRepositoryService<IllnessDetail>, private messageService: MessageService, private confirmationService: ConfirmationService) { }
}
