import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  @Output() pin: EventEmitter<any> = new EventEmitter();
  @Output() pName: EventEmitter<any> = new EventEmitter();
  @Input() opened;
  @Input() pinButton = false;
  patients: boolean = true;
  constructor(private router: Router, private translate: TranslateService) {}
  pinSidebar() {
    this.pinButton = !this.pinButton;
    this.pin.emit(this.pinButton);
  }

  ngOnInit(): void { }

   changeLang(langCode: string){
    this.translate.use(langCode);
    }
}
