import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GoalType } from 'src/app/models/data/goal.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
    selector: 'app-goal-type-transactions',
    templateUrl: './goal-type-transactions.component.html'
})
export class GoalTypeTransactionsComponent {
    constructor(private entitiyService: HttpEntityRepositoryService<GoalType>, private messageService: MessageService, private confirmationService: ConfirmationService) { }
}