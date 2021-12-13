import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatSnackBarModule,
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatSnackBarModule,
  ],
  providers: [],
})
export class CustomMaterialModule { }
