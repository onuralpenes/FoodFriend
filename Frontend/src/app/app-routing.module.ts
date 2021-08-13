import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main-page/main/main.component';

const routes: Routes = [
  {path: 'home', component: MainComponent},
  {path: 'login' , component: LoginComponent},
  {path: '', redirectTo : "login", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
