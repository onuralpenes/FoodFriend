import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from "@angular/core";
import { AlertService } from "src/app/helpers/alert.service";
import { PersonalEnergyActivity } from "src/app/models/data/energy-activity.model";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";


@Component({
    selector: 'app-patient-activity-table',
    templateUrl: './patient-activity-table.html',
    styleUrls: ['./patient-activity-table.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientActivityTable implements AfterViewInit {
    activityWithFilter: PersonalEnergyActivity[] = [];
    activityWithoutFilter: PersonalEnergyActivity[] = [];
    first = 0;
    rows = 10;
    searchText = "";

    @Input() id = 0;

    constructor(private entityService: HttpEntityRepositoryService<PersonalEnergyActivity>, private alertService: AlertService, private detect: ChangeDetectorRef) { }

    ngAfterViewInit() {
        this.detect.detach();
        setInterval(() => {
            if (this.id != 0) {
                this.detect.detectChanges();
                this.entityService.get("/PersonalEnergyActivity/GetByUserId?userId=", this.id).subscribe(data => {
                    var Data: any = data;
                    if (!Data.success) {
                        this.alertService.openSnackBar(Data.success, Data.message);
                        return;
                    }
                    this.activityWithFilter = Data.data;
                    this.activityWithoutFilter = Data.data;
                });
            }
        }, 5000)
    }


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