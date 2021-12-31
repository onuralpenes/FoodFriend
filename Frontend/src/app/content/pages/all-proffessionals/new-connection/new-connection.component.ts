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
  constructor(private entityService: HttpEntityRepositoryService<User>, private messageService: MessageService) { 

    entityService.getAll("/User/GetAllPatient").subscribe(data =>{
      var Data: any = data
      if(!Data.success){
        return;
      }else{
        this.patients = Data.data;
      }
    })

  }

  ngOnInit(): void {
  }

}
