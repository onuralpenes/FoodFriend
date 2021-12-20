import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Expert } from 'src/app/models/core/expert.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent {
  loaded = false;
  constructor(private entityService: HttpEntityRepositoryService<Expert>, messageService: MessageService,) {
    this.entityService.getAll("/User/GetAllProfessionel").subscribe(data => {
      var Data: any = data;
      if (!Data.success) {
        messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
        return;
      }
      this.experts = Data.data;
      this.loaded = true;
      console.log(Data.data);
    });
  }

  experts: Expert[] = [];
  searchText: string = "";

  keyup(searchText) {
    this.searchText = searchText;
  }
}
