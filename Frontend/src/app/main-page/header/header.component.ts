import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor() { 

  }
  @HostBinding('class.toggle') toggle: boolean = true;

  ngOnInit(): void {
  }

}
