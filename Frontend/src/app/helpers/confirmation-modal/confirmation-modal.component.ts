import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmModalComponent {
  title?: string;
  message?: string;
  constructor(public dialogRef: MatDialogRef<ConfirmModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
}
