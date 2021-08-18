import { Component } from "@angular/core";

@Component({
    selector: 'app-private-layout',
    templateUrl: './private-layout.component.html',
})

export class PrivateLayoutComponent {
    sideBar = true;

    toggle() {
        this.sideBar = !this.sideBar;
    }
}