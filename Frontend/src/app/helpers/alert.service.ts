import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public myAlert: MatSnackBar) {}

  openSnackBar(success: boolean,message: string) {
    this.openSnackBarWithAction(success,message, 'OK');
  }

  openSnackBarWithAction(success: boolean,message: string, action: string) {
    if(success){
      
    this.myAlert.open(message, action, {
      duration: 1500,
      panelClass: ["alertSuccess"]
    });
    }else{
      this.myAlert.open(message, action, {
        duration: 1500,
        panelClass: ["alertNotSuccess"]
      });
    }
  }
}