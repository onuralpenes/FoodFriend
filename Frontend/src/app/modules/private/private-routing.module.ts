import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateLayoutComponent } from './private-layout.component';
import { ActivityListComponent } from 'src/app/content/pages/activity-list/activity-list.component';
import { DashboardComponent } from 'src/app/content/pages/dashboard/dashboard.component';
import { ProfileComponent } from 'src/app/content/pages/profile/profile.component';
import { EatingActivityComponent } from 'src/app/content/pages/eating-activity/eating-activity.component';
import { PatientListComponent } from 'src/app/content/pages/patient-trace/patient-list.component';
import { ExpertsComponent } from 'src/app/content/pages/experts/experts.component';
import { PatientProfileComponent } from 'src/app/content/pages/patient-profile/patient-profile.component';
import { FoodListComponent } from 'src/app/content/pages/food-list/food-list.component';
import { SettingsComponent } from 'src/app/content/pages/settings/settings.component';
import { RoleGuardService } from 'src/app/services/can-active.guard';
import { Roles } from 'src/app/models/core/userRoles.model';

const routes: Routes = [
    {
        path: '',
        component: PrivateLayoutComponent,
        children: [

            {
                path: 'dashboard', component: DashboardComponent,
                canActivate: [RoleGuardService],
                data: { roles: [ Roles.Patient, Roles.Professional, Roles.Admin] }
            },
            {
                path: 'profile', component: ProfileComponent,
                canActivate: [RoleGuardService],
                data: { roles: [Roles.Professional, Roles.Admin ,Roles.Patient] }
            },
            { path: 'eating-activity', component: EatingActivityComponent },
            { path: 'activity-list', component: ActivityListComponent },
            { path: 'patient-list', component: PatientListComponent },
            { path: 'experts', component: ExpertsComponent },
            { path: 'patient-profile/:id', component: PatientProfileComponent },
            { path: 'food-list', component: FoodListComponent },
            { path: 'settings', component: SettingsComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PrivateRoutingModule { }
