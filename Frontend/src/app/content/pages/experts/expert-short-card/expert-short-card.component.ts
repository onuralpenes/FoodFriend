import { Input } from '@angular/core';
import { Component } from '@angular/core';;
import { AlertService } from 'src/app/helpers/alert.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-expert-short-card',
  templateUrl: './expert-short-card.component.html',
  styleUrls: ['./expert-short-card.component.css'],
  providers: [ConfirmationService]
})
export class ExpertShortCardComponent {
  @Input() expert;

  constructor(private alertService: AlertService, private confirmationService: ConfirmationService) { }

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
       this.alertService.openSnackBar(true, "success");
      },
      reject: () => {
        this.alertService.openSnackBar(false, "unsuccess");
      }
    });
  }
}
