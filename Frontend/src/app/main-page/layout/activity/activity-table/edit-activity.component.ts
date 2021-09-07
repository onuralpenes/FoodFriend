import { Component, Inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Transfer } from "./activity-table.component";

@Component({
    selector: 'app-edit-activity',
    templateUrl: './edit-activity.html',
    styleUrls: ['./activity-table.component.css'],
  })
  export class EditActivity {
  
    editForm!: FormGroup;
    post: any = '';
  
    constructor(@Inject(MAT_DIALOG_DATA) public data: Transfer, private formBuilder: FormBuilder) { }
  
    ngOnInit() {
      this.editForm = this.formBuilder.group({
        'activityType': new FormControl(''),
        'activityPeriod': new FormControl(''),
        'activityEffortSpent': new FormControl(''),
        'activityeffortUnit': new FormControl(''),
        'activityStartDate': new FormControl(''),
        'activityEndDate': new FormControl(''),
      });
    }
  
    onSubmit(post) {
      this.post = post;
    }
  }