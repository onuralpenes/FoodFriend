import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/main-page/layout/dashboard/dashboard.component';
import { ProfileComponent } from 'src/app/main-page/layout/profile/profile.component';
import { PrivateLayoutComponent } from './private-layout.component';
import { ExpertsComponent } from 'src/app/main-page/layout/experts/experts.component';
import { SettingsComponent } from 'src/app/main-page/layout/settings/settings.component';
import { FoodListComponent } from 'src/app/main-page/layout/food-list/food-list.component';
import { ActivityListComponent } from 'src/app/main-page/layout/activity-list/activity-list.component';
import { PatientListComponent } from 'src/app/main-page/layout/patient-trace/patient-list.component';
import { PatientProfileComponent } from 'src/app/main-page/layout/patient-profile/patient-profile.component';
import { EatingActivityComponent } from 'src/app/main-page/layout/food/eating-activity.component';

const routes: Routes = [
    {
        path: '',
        component: PrivateLayoutComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'profile', component: ProfileComponent },
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
