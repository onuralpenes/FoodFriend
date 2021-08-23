import { Component } from "@angular/core";

@Component({
    selector: 'app-private-layout',
    templateUrl: './private-layout.component.html',
})

export class PrivateLayoutComponent {
    sideBar = true;
    pinned = true;
    toggle() {
        if(this.pinned){
            this.sideBar = this.sideBar;
        }else{
            this.sideBar = !this.sideBar;
        }
    }
    pin(){
        this.pinned = !this.pinned;
    }
}