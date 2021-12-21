import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './content/login/login.component';
import { NotFoundComponent } from './content/pages/not-found/not-found.component';
import { RoleGuardService } from './services/can-active.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/private/private.module').then(m => m.PrivateModule)
  },

  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: "login", pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }