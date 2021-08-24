import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counselee-profile',
  templateUrl: './counselee-profile.component.html',
  styleUrls: ['./counselee-profile.component.css']
})
export class CounseleeProfileComponent implements OnInit {
  userName = "Yiğit Fatih Kılıç"; //tıklanılan kullanıcın adı olacak
  constructor() { }

  ngOnInit(): void {
  }

}
