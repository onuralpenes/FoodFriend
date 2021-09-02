import { Component, } from '@angular/core';
import { Expert, experts } from './data';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent {

  constructor() {
  }

  experts: Expert[] = experts;
  searchText: string = "";

  keyup(searchText) {
    this.searchText = searchText;
  }
  selectPost(post) {
    console.log(`The selected post is::  ${post.title}`);
  }

}
