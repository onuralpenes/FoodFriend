import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from 'src/app/main-page/layout/profile/profile.component';
import { MainComponent } from '../../main-page/main/main.component';
import { PrivateLayoutComponent } from './private-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      { path: 'home', component: MainComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
