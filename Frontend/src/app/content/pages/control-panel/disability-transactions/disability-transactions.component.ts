import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DisabledDetail } from 'src/app/models/user/physical-info/disabled-detail.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
    selector: 'app-disability-transactions',
    templateUrl: './disability-transactions.component.html'
})
export class DisabilityTransactionsComponent {
    constructor(private entitiyService: HttpEntityRepositoryService<DisabledDetail>, private messageService: MessageService, private confirmationService: ConfirmationService) { }
}
