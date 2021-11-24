import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from "@angular/core";
import { AlertService } from "src/app/helpers/alert.service";
import { EatingActivity } from "src/app/models/data/eating-activity.model";
import { HttpEntityRepositoryService } from "src/app/services/http-entity-repository.service";
import { EatTable, Tab } from "../../food/eating-activity.component";

@Component({
    selector: 'app-patient-nutrition-table',
    templateUrl: './patient-nutrition-table.html',
    styleUrls: ['./patient-nutrition-table.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientNutritionTable {
    eatTab: Tab[] = [];
    addFod: boolean = false;
    editFod: boolean = false;

    @Input() id = 0;

    constructor(private entityService: HttpEntityRepositoryService<EatingActivity>, private alertService: AlertService, private detect: ChangeDetectorRef) {
        detect.detach();
        setInterval(() => {
            if (this.id != 0) {
                detect.detectChanges();
                entityService.get('/EatingActivity/GetByUserId?userId=', this.id).subscribe(data => {

                    var Data: any = data;
                    if (!Data.success) {
                        this.alertService.openSnackBar(Data.success, Data.message);
                        return;
                    }
                    for (let i = 0; i < Data.data.length; i++) {
                        let eatTable: EatTable[] = [];

                        let eId = Data.data[i].eatingActivityId;
                        let time1 = Data.data[i].startEatingActivity;
                        let time2 = Data.data[i].endEatingActivity;
                        for (let j = 0; j < Data.data[i].nutritions.length; j++) {
                            if (Data.data[i].nutritions[j].foodDetailId == 0) {
                                let newEat: EatTable = {
                                    nutId: Data.data[i].nutritions[j].nutritionId,
                                    foodId: Data.data[i].nutritions[j].foodDetailId,
                                    eatId: eId,
                                    startDate: time1,
                                    endDate: time2,
                                    foodName: Data.data[i].nutritions[j].customFoodName,
                                    quantity: Data.data[i].nutritions[j].quantity
                                }
                                eatTable.push(newEat);
                            }
                            else {
                                let newEat: EatTable = {
                                    nutId: Data.data[i].nutritions[j].nutritionId,
                                    foodId: Data.data[i].nutritions[j].foodDetailId,
                                    eatId: eId,
                                    startDate: time1,
                                    endDate: time2,
                                    foodName: Data.data[i].nutritions[j].foodName,
                                    quantity: Data.data[i].nutritions[j].quantity
                                }
                                eatTable.push(newEat);
                            }
                        }
                        let newTab: Tab = {
                            tabId: i + 1,
                            eatTab: eatTable
                        }
                        this.eatTab.push(newTab);
                    }
                });
            }
        }, 5000)
    }
}