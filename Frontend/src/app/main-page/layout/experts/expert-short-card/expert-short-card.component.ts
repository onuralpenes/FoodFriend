import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from 'src/app/helpers/alert.service';
import { ConfirmModalComponent } from 'src/app/helpers/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-expert-short-card',
  templateUrl: './expert-short-card.component.html',
  styleUrls: ['./expert-short-card.component.css']
})
export class ExpertShortCardComponent {
  @Input() expert;

  constructor(private modal: MatDialog, private alertService: AlertService) { }

  details = false;

  detailExpert() {
    this.details = !this.details;
  }

  authorize(name: string) {
    const confirmModal = this.modal.open(ConfirmModalComponent, {
      data: {
        title: 'Confirm the Authorization.',
        message: 'Are you sure you want to authorize expert: ' + name
      }
    }).afterClosed().subscribe(result => {
      if (result === true) {
        this.alertService.openSnackBar(true, "success");
      }
      else {
        this.alertService.openSnackBar(false, "unsuccess");
      }
    });
  }
}
