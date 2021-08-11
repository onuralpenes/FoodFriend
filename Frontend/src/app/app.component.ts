import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Frontend';

  flag: boolean = false;
  signUpButton = document.getElementById('signUp');
  signInButton = document.getElementById('signIn');
  container = document.getElementById('cont');
  
}

