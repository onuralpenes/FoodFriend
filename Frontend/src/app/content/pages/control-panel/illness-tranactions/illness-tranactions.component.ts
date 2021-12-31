import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IllnessDetail } from 'src/app/models/user/health-info/illness-detail.model';
import { HttpEntityRepositoryService } from 'src/app/services/http-entity-repository.service';

@Component({
    selector: 'app-illness-tranactions',
    templateUrl: './illness-tranactions.component.html',
    styleUrls: ['../control-panel.component.css']
})
export class IllnessTransactionsComponent {
    illnessList: IllnessDetail[] = [];
    illness!: IllnessDetail;
    illnessForm!: FormGroup;
    illnessBool: boolean = false;
    loaded = false;
    first = 0;
    rows = 7;
    state: string = "";
    constructor(private entityService: HttpEntityRepositoryService<IllnessDetail>, private messageService: MessageService, private confirmationService: ConfirmationService, private formBuilder: FormBuilder) {
        this.entityService.getAll("/IllnessDetail/GetAll").subscribe(data => {
            var Data: any = data;
            if (!Data.success) {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: Data.message });
                return;
            }
            this.illnessList = Data.data;
            this.loaded = true;
        })
        this.illnessForm = this.formBuilder.group({
            'illnessName': new FormControl('', [Validators.required]),
        });
    }
    add() {
        this.illnessForm.reset();
        this.illnessForm = this.formBuilder.group({
            'illnessName': new FormControl('', [Validators.required]),
        });
        this.state = "Add"
        this.illnessBool = true;
    }

    update(illness: IllnessDetail) {
        this.illness = illness;
        this.illnessForm.reset();
        this.illnessForm = this.formBuilder.group({
            'illnessName': new FormControl(illness.illnessName, [Validators.required]),
        });
        this.state = "Edit"
        this.illnessBool = true;
    }

    delete(id: number, name: string) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete illness: ' + name,
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.entityService.delete("/IllnessDetail?id=", id).subscribe(
                    (data) => {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'The illness was deleted successfully.',
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
                this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'You did not delete the illness.' });
            }
        });
    }
    onSubmit() {
        if (this.state == "Edit" && this.illnessForm.valid) {
            this.confirmationService.confirm({
                message: 'Are you sure you want to update illness: ' + this.illnessForm.value.illnessName,
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    let illnessName;
                    if (this.illnessForm.value.illnessName != this.illness.illnessName) {
                        illnessName = this.illnessForm.value.illnessName;
                    }
                    else {
                        illnessName = this.illness.illnessName;
                    }
                    let updatedIllness = {
                        illnessDetailId: this.illness.illnessDetailId,
                        healthInfoId: 0,
                        illnessName: illnessName
                    }
                    this.entityService.insert("/IllnessDetail/Update", JSON.stringify(updatedIllness))
                        .subscribe(data => {
                            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The illness has been successfully updated.' });
                        }, err => {
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred during the update.' });
                        });
                },
                reject: () => {
                    this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'You did not update the illness.' });
                }
            });
        }
        else if (this.state == "Add" && this.illnessForm.valid) {
            this.confirmationService.confirm({
                message: 'Are you sure you want to add illness: ' + this.illnessForm.value.illnessName,
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    let addIllness = {
                        healthInfoId: 0,
                        illnessDetailId: 0,
                        illnessName: this.illnessForm.value.illnessName,
                    }
                    this.entityService.insert("/IllnessDetail/Add", JSON.stringify(addIllness))
                        .subscribe(data => {
                            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'The illness has been successfully added.' });
                        }, err => {
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error occurred during the creation process. ' });
                        });
                },
                reject: () => {
                    this.messageService.add({ severity: 'warn', summary: 'Unsuccess', detail: 'You did not delete the illness.' });
                }
            });
        }
    }
}
