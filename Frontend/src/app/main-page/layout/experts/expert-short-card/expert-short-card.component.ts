import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { experts } from '../data';

@Component({
  selector: 'app-expert-short-card',
  templateUrl: './expert-short-card.component.html',
  styleUrls: ['./expert-short-card.component.css']
})
export class ExpertShortCardComponent implements OnInit {
  @Input() expert;

  details = false;
  constructor() {}

  ngOnInit(): void {
  }
  detailExpert() { 
    this.details = !this.details;
  }
}
