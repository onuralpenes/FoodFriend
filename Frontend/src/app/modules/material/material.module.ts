import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSortModule,
    MatTableModule,

    NgxChartsModule,

    NgCircleProgressModule.forRoot({}),
  ],

  exports: [
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSortModule,
    MatTableModule,

    NgxChartsModule,

    NgCircleProgressModule,

  ],
  providers: [MatDatepickerModule],

})

export class CustomMaterialModule { }