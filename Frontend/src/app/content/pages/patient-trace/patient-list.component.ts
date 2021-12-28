import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PatientListComponent {
  usersWithFilter: User[] = [];
  usersWithoutFilter: User[] = [];
  first = 0;
  rows = 10;
  searchText = "";
  nutritionInformation: boolean = false;
  activityInformation: boolean = false;
  loaded = false;
  loadedInside = false;
  constructor(private router: Router, private entityService: HttpEntityRepositoryService<User>, private messageService: MessageService, private authService: AuthService) {
    
    entityService.get("/User/GetAllAssignmentsPatientForProfessionnel?professionnelId=", this.authService.CurrentUserId).subscribe(data => {

      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return;
      }
      console.log(data);
      this.loaded = true;
      this.usersWithFilter = Data.data;
      this.usersWithoutFilter = Data.data;
    });

  }

  userInfo(id:any){

    this.entityService.get("/api/Goal/GetByUserId?userId=", this.authService.CurrentUserId).subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
          return;
      }
      
  });
    console.log(id);
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