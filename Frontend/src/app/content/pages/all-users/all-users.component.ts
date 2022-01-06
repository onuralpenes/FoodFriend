import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/user/user.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
    selector: 'app-all-users',
    templateUrl: './all-users.component.html',
    styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
    professionals: User[] = [];
    patients: User[] = [];
    rows = 10;
    searchText = "";
    loaded = false;

    constructor(entityService: HttpEntityRepositoryService<User>, private messageService: MessageService) {
        entityService.getAll("/User/GetAllProfessionel").subscribe(data => {
            var Data: any = data;
            if (!Data.success) {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
                return;
            }
            this.loaded = true;
            this.professionals = Data.data;
        });
        entityService.getAll("/User/GetAllPatient").subscribe(data => {
            var Data: any = data;
            if (!Data.success) {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
                return;
            }
            this.loaded = true;
            this.patients = Data.data;
        });
    }
    keyup(searchText) {
        this.searchText = searchText;
    }
}
