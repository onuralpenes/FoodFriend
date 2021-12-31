import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AllergyDetail } from 'src/app/models/user/health-info/allergy-detail.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
    selector: 'app-allergy-transactions',
    templateUrl: './allergy-transactions.component.html',
    styleUrls: ['../control-panel.component.css']
})
export class AllergyTransactionsComponent {
    allergyList: AllergyDetail[] = [];
    allergy!: AllergyDetail;
    allergyForm!: FormGroup;
    allergyBool: boolean = false;
    loaded = false;
    first = 0;
    rows = 7;
    state: string = "";
    constructor(private entityService: HttpEntityRepositoryService<AllergyDetail>, private messageService: MessageService, private confirmationService: ConfirmationService, private formBuilder: FormBuilder) {
        this.entityService.getAll("/AllergyDetail/GetAll").subscribe(data => {
            var Data: any = data;
            if (!Data.success) {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
                return;
            }
            this.allergyList = Data.data;
            this.loaded = true;
        })
        this.allergyForm = this.formBuilder.group({
            'allergyName': new FormControl('', [Validators.required]),
        });
    }
    add() {
        this.allergyForm.reset();
        this.allergyForm = this.formBuilder.group({
            'allergyName': new FormControl('', [Validators.required]),
        });
        this.state = "Add"
        this.allergyBool = true;
    }

    update(allergy: AllergyDetail) {
        this.allergy = allergy;
        this.allergyForm.reset();
        this.allergyForm = this.formBuilder.group({
            'allergyName': new FormControl(allergy.allergyName, [Validators.required]),
        });
        this.state = "Edit"
        this.allergyBool = true;
    }

    delete(id: number, name: string) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete allergy: ' + name,
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.entityService.delete("/AllergyDetail?id=", id).subscribe(
                    (data) => {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'The allergy was deleted successfully.',
                        });
                    },
                    (err) => {
                        if (err)
                            this.messageService.add({
                                severity: 'error',
                                summary: 'Error',
                                detail: 'An error occurred during the deletion process.',
                            });
                    }
                );
            },
            reject: () => {
                this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'You did not delete the allergy.' });
            }
        });
    }
    onSubmit() {
        if (this.state == "Edit" && this.allergyForm.valid) {
            this.confirmationService.confirm({
                message: 'Are you sure you want to update allergy: ' + this.allergyForm.value.allergyName,
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    let allergyName;
                    if (this.allergyForm.value.allergyName != this.allergy.allergyName) {
                        allergyName = this.allergyForm.value.allergyName;
                    }
                    else {
                        allergyName = this.allergy.allergyName;
                    }
                    let updatedAllergy = {
                        allergyDetailId: this.allergy.allergyDetailId,
                        healthInfoId: 0,
                        allergyName: allergyName
                    }
                    console.log(updatedAllergy)
                    this.entityService.insert("/AllergyDetail/Update", JSON.stringify(updatedAllergy))
                        .subscribe(data => {
                            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The allergy has been successfully updated.' });
                        }, err => {
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred during the update.' });
                        });
                },
                reject: () => {
                    this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'You did not update the allergy.' });
                }
            });
        }
        else if (this.state == "Add" && this.allergyForm.valid) {
            this.confirmationService.confirm({
                message: 'Are you sure you want to add allergy: ' + this.allergyForm.value.allergyName,
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    let addAllergy = {
                        healthInfoId: 0,
                        allergyDetailId: 0,
                        allergyName: this.allergyForm.value.allergyName,
                    }
                    this.entityService.insert("/AllergyDetail/Add", JSON.stringify(addAllergy))
                        .subscribe(data => {
                            var Data:any = data;
                            if(Data.success) this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The allergy has been successfully added.' });
                        }, err => {
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred during the creation process. ' });
                        });
                },
                reject: () => {
                    this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'You did not delete the allergy.' });
                }
            });
        }
    }
}