import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PrivateLayoutComponent } from 'src/app/modules/private/private-layout.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  @Output() pin: EventEmitter<any> = new EventEmitter();
  @Output() pName: EventEmitter<any> = new EventEmitter();
  @Input() opened;
  @Input() pinButton = false;
  constructor(private priv: PrivateLayoutComponent) { }
  pinSidebar() {
    this.pinButton = !this.pinButton;
    this.pin.emit(this.pinButton);
  }

  changeLang(langCode: string) {
    this.priv.changeLang(langCode);
  }
}
