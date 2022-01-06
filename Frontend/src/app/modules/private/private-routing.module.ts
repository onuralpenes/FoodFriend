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
import { CalendarComponent } from 'src/app/content/pages/calendar/calendar.component';
import { AllProffessionalsComponent } from 'src/app/content/pages/all-proffessionals/all-proffessionals.component';
import { ControlPanelComponent } from 'src/app/content/pages/control-panel/control-panel.component';
import { RecommendationPatientComponent } from 'src/app/content/pages/recomendation-patient/recommendation-patient.component';
import { GoalsAndPurposesComponent } from 'src/app/content/pages/goals-and-purposes/goals-and-purposes.component';
import { AllUsersComponent } from 'src/app/content/pages/all-users/all-users.component';

const routes: Routes = [
    {
        path: '',
        component: PrivateLayoutComponent,
        children: [
            {
                path: 'dashboard', component: DashboardComponent,
                canActivate: [RoleGuardService],
                data: { roles: [Roles.Patient, Roles.Professional, Roles.Admin] }
            },
            {
                path: 'profile', component: ProfileComponent,
                canActivate: [RoleGuardService],
                data: { roles: [Roles.Professional, Roles.Admin, Roles.Patient] }
            },
            {
                path: 'eating-activity', component: EatingActivityComponent,
                canActivate: [RoleGuardService],
                data: { roles: [Roles.Admin, Roles.Patient] }
            },
            {
                path: 'activity-list', component: ActivityListComponent,
                canActivate: [RoleGuardService],
                data: { roles: [Roles.Admin, Roles.Patient] }
            },
            {
                path: 'patient-list', component: PatientListComponent,
                canActivate: [RoleGuardService],
                data: { roles: [Roles.Professional] }
            },
            {
                path: 'experts', component: ExpertsComponent,
                canActivate: [RoleGuardService],
                data: { roles: [Roles.Patient, Roles.Admin] }
            },
            {
                path: 'patient-profile/:id', component: PatientProfileComponent,
                canActivate: [RoleGuardService],
                data: { roles: [Roles.Professional, Roles.Admin] }
            },
            {
                path: 'food-list', component: FoodListComponent,
                canActivate: [RoleGuardService],
                data: { roles: [Roles.Professional, Roles.Patient] }
            },
            {
                path: 'settings', component: SettingsComponent,
                canActivate: [RoleGuardService],
                data: { roles: [Roles.Professional, Roles.Admin, Roles.Patient] }
            },
            {
                path: 'calendar', component: CalendarComponent,
                canActivate: [RoleGuardService],
                data: { roles: [Roles.Professional, Roles.Admin, Roles.Patient] }
            },
            {
                path: 'goals-and-purposes', component: GoalsAndPurposesComponent,
                canActivate: [RoleGuardService],
                data: { roles: [Roles.Patient] }
            },
            {
                path: 'recommendations', component: RecommendationPatientComponent,
                canActivate: [RoleGuardService],
                data: { roles: [Roles.Patient] }
            },
            {
                path: 'all-experts', component: AllProffessionalsComponent,
                canActivate: [RoleGuardService],
                data: { roles: [Roles.Admin] }
            },
            {
                path: 'control-panel', component: ControlPanelComponent,
                canActivate: [RoleGuardService],
                data: { roles: [Roles.Admin] }
            },
            {
                path: 'all-users', component: AllUsersComponent,
                canActivate: [RoleGuardService],
                data: { roles: [Roles.Admin] }
            },

            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PrivateRoutingModule { }