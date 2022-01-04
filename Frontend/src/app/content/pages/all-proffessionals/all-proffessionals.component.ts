import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
  selector: 'app-all-proffessionals',
  templateUrl: './all-proffessionals.component.html',
  styleUrls: ['./all-proffessionals.component.css']
})
export class AllProffessionalsComponent implements OnInit {
  usersWithFilter: User[] = [];
  usersWithoutFilter: User[] = [];
  usersRelatedProf: User[] = [];
  first = 0;
  rows = 10;
  searchText = "";
  nutritionInformation: boolean = false;
  activityInformation: boolean = false;
  newConnect = false;
  newConnectionProfId;
  loaded = false;
  loadedInside = false;
  constructor(private router: Router, private confirmationService: ConfirmationService, private entityService: HttpEntityRepositoryService<User>, private messageService: MessageService, private authService: AuthService) {
    entityService.getAll("/User/GetAllProfessionel").subscribe(data => {

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

  ngOnInit(): void {
  }

  relatedPatient(id: any) {
    //this.loadedInside = false;
    this.entityService.get("/User/GetAllAssignmentsPatientForProfessionnel?professionnelId=", id).subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return;
      }
      else {

        console.log(Data);
        this.usersRelatedProf = Data.data
        this.loadedInside = true;
      }
    });
    console.log(id);
  }
  newConnection(id: number) {

    this.newConnectionProfId = id;
    this.newConnect = true;

  }
  open(id: number) {
    this.router.navigate(['/counselee-profile/' + id]);
  }

  public clickedUserId: number = 0;

  deleteUserFromProf(id: number, idProf: number) {

    this.confirmationService.confirm({
      message: 'Are you sure you want to close connectiom? ',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.entityService.post("/User/AssignmentProfessionnelDelete?professionnelId=" + idProf + "&patientId=", id).subscribe(data => {
          var Data: any = data;
          if (!Data.success) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
            return;
          }
          else {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The connection has been successfully closed.' });
            location.reload();
          }
        }, err => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred during the closing connection.' });
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'You did not close connection.' });
      }
  });
    
  }
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
