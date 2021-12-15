import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-expert-short-card',
  templateUrl: './expert-short-card.component.html',
  styleUrls: ['./expert-short-card.component.css'],
  providers: [ConfirmationService]
})
export class ExpertShortCardComponent {
  @Input() expert;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }

  details = false;

  detailExpert() {
    this.details = !this.details;
  }

  authorize(name: string) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to authorize expert: ' + name,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The expert has been successfully authorized.' });
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'Expert not authorized.' });
      }
    });
  }
}
