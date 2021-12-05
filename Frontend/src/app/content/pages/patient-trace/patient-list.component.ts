import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/helpers/alert.service';
import { User } from 'src/app/models/user/user.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
// import { ActivityTable } from './activity-table/activity-table.component';
// import { NutritionTable } from './nutrition-table/nutrition-table.component';
// import { PatientTarget } from './target/target.component';

// export interface Transfer {
//   name: string;
//   id: number;
// }

// export interface Transfer2 {
//   name: string,
//   target: boolean,
//   startingDate: Date,
//   endDate: Date,
//   startingWeight: number,
//   targetWeight: number,
//   currentWeight: number
// }

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PatientListComponent {
  usersWithFilter: User[] = [];
  usersWithoutFilter: User[] = [];
  first = 0;
  rows = 10;
  searchText = "";
  nutritionInformation: boolean = false;
  activityInformation: boolean = false;

  constructor(private router: Router, private alertService: AlertService, entityService: HttpEntityRepositoryService<User>) {
    entityService.getAll("/User/GetAll").subscribe(data => {

      var Data: any = data;
      if (!Data.success) {
        this.alertService.openSnackBar(Data.success, Data.message);
        return;
      }

      this.usersWithFilter = Data.data;
      this.usersWithoutFilter = Data.data;
    });

  }

  open(id: number) {
    this.router.navigate(['/counselee-profile/' + id]);
  }

  public clickedUserId: number = 0;

  openActivity(id: number) {
    this.clickedUserId = id;
    this.activityInformation = true;
  }

  openFood(id: number) {
    this.clickedUserId = id;
    this.nutritionInformation = true;
  }

  openTarget(id: number) {
    // this.modal.open(PatientTarget, {
    //   data: {
    //     name: firstName + ' ' + lastName,
    //     id: id,
    //     //currentWeight: this.users[id - 1].weight,
    //   },
    // });
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
    return this.usersWithFilter ? this.first === (this.usersWithFilter.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.usersWithFilter ? this.first === 0 : true;
  }
}