import { Component, Input, SimpleChanges } from "@angular/core";
import { MessageService } from "primeng/api";
import { EditEventService } from "src/app/helpers/edit-event.service";
import { PersonalEnergyActivity } from "src/app/models/data/energy-activity.model";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";


@Component({
    selector: 'app-patient-activity-table',
    templateUrl: './patient-activity-table.html',
    styleUrls: ['./patient-activity-table.css']
})
export class PatientActivityTable {
    activityWithFilter: PersonalEnergyActivity[] = [];
    activityWithoutFilter: PersonalEnergyActivity[] = [];
    first = 0;
    rows = 10;
    searchText = "";
    loaded = false;

    @Input() id = 0;

    ngOnChanges(changes: SimpleChanges) {
        if (this.id != 0) {
            this.entityService.get("/PersonalEnergyActivity/GetByUserId?userId=", this.id).subscribe(data => {
                var Data: any = data;
                if (!Data.success) {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
                    return;
                }
                this.activityWithFilter = Data.data;
                this.activityWithoutFilter = Data.data;
                this.loaded = true;
            });
        }
    }

    constructor(private entityService: HttpEntityRepositoryService<PersonalEnergyActivity>, private messageService: MessageService, private editEventService: EditEventService) { }

    keyup(searchText) {
        this.searchText = searchText;
    }
    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    isLastPage(): boolean {
        return this.activityWithFilter ? this.first === (this.activityWithFilter.length - this.rows) : true;
    }

    isFirstPage(): boolean {
        return this.activityWithFilter ? this.first === 0 : true;
    }
}