import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CounseleeProfileComponent } from '../../counselee-profile/counselee-profile.component';

@Component({
  selector: 'app-expert-profile',
  templateUrl: './expert-profile.component.html',
  styleUrls: ['./expert-profile.component.css']
})
export class ExpertProfileComponent implements OnInit {
  @Input() expert;
  constructor(public dialog: MatDialog) {
    console.log(this.expert)
   }

  openProfile() {
    const dialogRef = this.dialog.open(CounseleeProfileComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }
}
