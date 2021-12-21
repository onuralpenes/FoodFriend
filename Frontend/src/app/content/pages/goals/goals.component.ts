import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Goal } from 'src/app/models/data/goal.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
    selector: 'app-goals',
    templateUrl: './goals.component.html',
    styleUrls: ['./goals.component.css']
})
export class GoalsComponent {
    goals: Goal[] = [];
    addGoal: boolean = false;
    loaded = false;

    constructor(private entityService: HttpEntityRepositoryService<Goal>, messageService: MessageService, authService: AuthService) {
        this.entityService.get("/api/Goal/GetByUserId?userId=", authService.CurrentUserId).subscribe(data => {
            var Data: any = data;
            if (!Data.success) {
                messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
                return;
            }
            this.goals = Data.data;
            this.loaded = true;
        });
    }
    createGoal() {
        this.addGoal = true;
    }
}
