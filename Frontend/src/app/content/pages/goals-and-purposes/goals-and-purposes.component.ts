import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { GetGoal } from 'src/app/models/data/goal.model';
import { Purpose } from 'src/app/models/data/purpose.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
    selector: 'app-goals-and-purposes',
    templateUrl: './goals-and-purposes.component.html',
    styleUrls: ['./goals-and-purposes.component.css']
})
export class GoalsAndPurposesComponent {
    goals: GetGoal[] = [];
    purposes: Purpose[] = [];
    addGoal: boolean = false;
    loaded = false;
    first = true;
    last = false;
    index: number = 0;
    state: string = "goal";

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

        this.entityService.get("/api/Purpose/GetByUserId?userId=", authService.CurrentUserId).subscribe(data => {
            var Data: any = data;
            if (!Data.success) {
                messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
                return;
            }
            this.purposes = Data.data;
            this.loaded = true;
        });
    }
    createGoal() {
        this.addGoal = true;
    }

    cardSwipe(value) {
        if (value == "next") {
            this.first = false;
            if (this.index + 1 != this.goals.length && this.state == "goal") {
                this.index++;
            }
            else{
                // if()
            }
        }
        else {
            if (this.index != 0) {
                this.index--;
            }
        }
    }
}