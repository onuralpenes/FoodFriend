import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PersonalEnergyActivity } from 'src/app/models/data/energy-activity.model';
import { User } from 'src/app/models/user/user.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
  selector: 'app-new-connection',
  templateUrl: './new-connection.component.html',
  styleUrls: ['./new-connection.component.css']
})
export class NewConnectionComponent implements OnInit {

  @Input() id = 0;
  patients : User[]=[]
  patientsWithFilter: User[] = [];
  patientsWithoutFilter: User[] = [];
  //usersRelatedProf: User[] = [];
  first = 0;
  rows = 10;
  searchText = "";
  constructor(private entityService: HttpEntityRepositoryService<User>, private messageService: MessageService) { 

    entityService.getAll("/User/GetAllPatient").subscribe(data =>{
      var Data: any = data
      if(!Data.success){
        return;
      }else{
        this.patients = Data.data;
        this.patientsWithoutFilter = Data.data;
      }
    })

  }
  connectUserToProf(patientId:number){
    this.entityService.insert("/User/AssignmentProfessionnel?professionnelId=" + this.id + "&patientId=" + patientId, {})
          .subscribe(data => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The expert and patient has been successfully connected.' });
            location.reload();
          }, err => {
            this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'An error occurred while authorizing expert.' });
          });
  }
  ngOnInit(): void {
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
    return this.patientsWithFilter ? this.first === (this.patientsWithFilter.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.patientsWithFilter ? this.first === 0 : true;
  }
}
