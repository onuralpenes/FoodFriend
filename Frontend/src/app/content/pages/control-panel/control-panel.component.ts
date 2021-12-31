import { Component } from '@angular/core';

@Component({
    selector: 'app-control-panel',
    templateUrl: './control-panel.component.html',
    styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
    allergy: boolean = false;
    illness: boolean = false;
    disabled: boolean = false;
    goalType: boolean = false;
    food: boolean = false;
    constructor() { }
}
