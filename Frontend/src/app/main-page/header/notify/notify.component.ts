import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Notify, NOTIFY_DATA } from "../notify-data";

@Component({
    selector: 'app-notify',
    templateUrl: './notify.component.html',
    styleUrls: ['./notify.component.css']
})
export class NotifyComponent {
    notification: Notify;

    constructor(private modalRef: MatDialogRef<NotifyComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any
    ) {
        this.notification = NOTIFY_DATA.filter(not => not.messageId === data.id)[0];
        this.notification.readed = true;
        console.log(this.notification);
    }

    done(){
        this.modalRef.close();
    }
}