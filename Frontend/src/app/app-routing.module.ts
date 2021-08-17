import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main-page/main/main.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/private/private.module').then(m => m.PrivateModule)
  },
  {path: 'login' , component: LoginComponent},
  {path: '', redirectTo : "login", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
