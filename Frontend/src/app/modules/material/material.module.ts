import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatToolbarModule,
    MatSidenavModule,
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
  ]
})
export class CustomMaterialModule { }
