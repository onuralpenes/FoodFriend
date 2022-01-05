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

    gFirst = true;
    gLast = false;
    pFirst = true;
    pLast = false;
    gIndex: number = 0;
     pIndex: number = 0;
    cardSwipeGoal(value) {
        if (value == "next") {
            this.gFirst = false;
            if (this.gIndex + 1 != this.goals.length) {
                this.gIndex++;
            }
            else {
                this.gLast = true;
            }
        }
        else {
            this.gFirst = false;
            if (this.gIndex != 0) {
                this.gIndex--;
            }
            else {
                this.gFirst = true;
            }
        }
    }
    cardSwipePurpose(value) {
        if (value == "next") {
            this.pFirst = false;
            if (this.pIndex + 1 != this.purposes.length) {
                this.pIndex++;
            }
            else {
                this.pLast = true;
            }
        }
        else {
            this.pLast = false;
            if (this.pIndex != 0) {
                this.pIndex--;
            }
            else {
                this.pFirst = true;
            }
        }
    }
}