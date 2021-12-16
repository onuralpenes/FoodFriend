import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
  selector: 'app-expert-short-card',
  templateUrl: './expert-short-card.component.html',
  styleUrls: ['./expert-short-card.component.css'],
  providers: [ConfirmationService]
})
export class ExpertShortCardComponent {
  @Input() expert;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private authService: AuthService, private entityService: HttpEntityRepositoryService<User>) { }

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
        this.entityService.insert("/User/AssignmentProfessionnel?professionnelId=" + this.expert.userId + "&patientId=" + this.authService.CurrentUserId, {})
          .subscribe(data => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The expert has been successfully authorized.' });
          }, err => {
            this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'An error occurred while authorizing expert.' });
          });
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'Expert not authorized.' });
      }
    });
  }
}
