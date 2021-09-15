import { Injectable } from "@angular/core";
import { UserInfo } from "../models/user/user-info/user-info.model";

@Injectable({
    providedIn: 'root'
})
export class QuickBranchService {
    id!: number;

    setQuickBranch(user: UserInfo){
        this.id = user.userId; 
    }

    getID(){
        return this.id;
    }
}