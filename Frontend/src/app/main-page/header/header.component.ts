import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggle: EventEmitter<any> = new EventEmitter(); //Required for connection with sidebar.

  constructor(private authService: AuthService, private readonly route: ActivatedRoute, private readonly router: Router) { }

  pageName;

  ngOnInit() {
    this.pageName = this.router.url.substring(1).toUpperCase();

    this.router.events.subscribe((val) => {
      this.pageName = this.router.url.substring(1).toUpperCase();
    });
  }

  emit() {
    this.toggle.emit(null); //Required for connection with sidebar.
  }

  logout() {
    this.authService.logout();
  }

}
