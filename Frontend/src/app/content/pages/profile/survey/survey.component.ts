import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PhysicalInfo } from 'src/app/models/user/physical-info/pysical-info.model';
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';
import { ProfileComponent } from '../profile.component';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  surveyForm!: FormGroup;
  illness: boolean = false;
  allergy: boolean = false;
  disabled: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private profile: ProfileComponent, private entityService: HttpEntityRepositoryService<User>, private entityService2: HttpEntityRepositoryService<PhysicalInfo>, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.surveyForm = this.formBuilder.group({
      'firstName': new FormControl(''),
      'lastName': new FormControl(''),
      'emailAddress': new FormControl(''),
      'phoneNumber': new FormControl(''),
      'height': new FormControl(''),
      'weight': new FormControl(''),
      'birthDate': new FormControl(''),
    });
  }

  onSubmit() {
    this.confirmationService.confirm({
      message: 'Are you sure, update your profile',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.entityService.get("/User/Get?userId=", this.authService.CurrentUserId).subscribe(dta => {
          var user: any = dta;
          if (!user.success) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: user.message });
            return;
          }
          let phyId = user.data.physicalInfoId
          if (this.surveyForm.value.emailAddress != "" || this.surveyForm.value.birthDate != "" || this.surveyForm.value.firstName != "" || this.surveyForm.value.lastName != "" || this.surveyForm.value.phoneNumber != "") {
            let updateUser = {
              "userId": this.authService.CurrentUserId,
              "emailAddress": user.data.emailAddress,
              "birthDate": user.data.birthDate as Date,
              "firstName": user.data.firstName,
              "lastName": user.data.lastName,
              "phone": user.data.phone
            }
            if (this.surveyForm.value.emailAddress != "") {
              updateUser.emailAddress = this.surveyForm.value.emailAddress;
            }
            if (this.surveyForm.value.birthDate != "") {
              updateUser.birthDate = this.surveyForm.value.birthDate as Date;
            }
            if (this.surveyForm.value.firstName != "") {
              updateUser.firstName = this.surveyForm.value.firstName;
            }
            if (this.surveyForm.value.lastName != "") {
              updateUser.lastName = this.surveyForm.value.lastName;
            }
            if (this.surveyForm.value.phoneNumber != "") {
              updateUser.phone = this.surveyForm.value.phoneNumber;
            }

            this.entityService.update("/User/Update", updateUser).subscribe(data => {
              var Data: any = data;
              if (!Data.success) {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
                return;
              }
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User information has been successfully updated.' });
            }, err => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'User information update failed.' });
            })
          }
          this.entityService2.get("/PhysicalInfo/Get?id=", user.data.physicalInfoId).subscribe(phy => {
            var userPhysicalInfo: any = phy;
            if (this.surveyForm.value.height != "" || this.surveyForm.value.weight != "") {
              let updatePhysicalInfo = {
                "physicalInfoId": phyId,
                "height": userPhysicalInfo.data.height,
                "weight": userPhysicalInfo.data.weight
              }
              if (this.surveyForm.value.height != "") {
                updatePhysicalInfo.height = +this.surveyForm.value.height;
              }
              if (this.surveyForm.value.weight != "") {
                updatePhysicalInfo.weight = +this.surveyForm.value.weight;
              }
              this.entityService2.update("/PhysicalInfo/Update", updatePhysicalInfo).subscribe(data => {
                var Data: any = data;
                if (!Data.success) {
                  this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
                  return;
                }
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Physical information has been successfully updated.' });
              }, err => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Physical information update failed.' });
              })
            }
          })
        });
        this.profile.editProfileTemp = false;
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'Your information has not been updated.' });
        return;
      }
    });
  }

  addIllness() {
    this.illness = true;
  }

  addAllergy() {
    this.allergy = true;
  }

  addDisability() {
    this.disabled = true;
  }
}
