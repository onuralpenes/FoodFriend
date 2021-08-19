import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggle: EventEmitter<any> = new EventEmitter(); //Required for connection with sidebar.

  constructor() { }

  ngOnInit(): void {
  }

  emit(){
    this.toggle.emit(null); //Required for connection with sidebar.
  }

}
