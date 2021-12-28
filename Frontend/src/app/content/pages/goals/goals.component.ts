import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { GetGoal } from 'src/app/models/data/goal.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
    selector: 'app-goals',
    templateUrl: './goals.component.html',
    styleUrls: ['./goals.component.css']
})
export class GoalsComponent {
    goals: GetGoal[] = [];
    addGoal: boolean = false;
    loaded = false;
    index: number = 0;

    constructor(private entityService: HttpEntityRepositoryService<GetGoal>, messageService: MessageService, authService: AuthService) {
        this.entityService.get("/api/Goal/GetByUserIdWithGoalName?userId=", authService.CurrentUserId).subscribe(data => {
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

    cardSwipe(value) {
        if (value == "next") {
            if (this.index + 1 != this.goals.length) {
                this.index++;
            }
        }
        else {
            if (this.index != 0) {
                this.index--;
            }
        }
    }
}