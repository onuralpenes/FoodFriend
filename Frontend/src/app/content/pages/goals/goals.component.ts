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

    constructor(private entityService: HttpEntityRepositoryService<Goal>, messageService: MessageService, private authService: AuthService) {
        this.entityService.get("/api/Goal/GetByUserId?id=", authService.CurrentUserId).subscribe(data => {
            var Data: any = data;
            if (!Data.success) {
                messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
                return;
            }
            this.goals.push(Data.data);
            console.log(Data.data);
        });
    }
}
