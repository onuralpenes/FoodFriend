import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from 'src/app/main-page/layout/activity/activity.component';
import { DashboardComponent } from 'src/app/main-page/layout/dashboard/dashboard.component';
import { FoodComponent } from 'src/app/main-page/layout/food/food.component';
import { PatientTraceComponent } from 'src/app/main-page/layout/patient-trace/patient-trace.component';
import { ProfileComponent } from 'src/app/main-page/layout/profile/profile.component';
import { PrivateLayoutComponent } from './private-layout.component';
import { CounseleeProfileComponent } from 'src/app/main-page/layout/counselee-profile/counselee-profile.component';
import { ExpertsComponent } from 'src/app/main-page/layout/experts/experts.component';

const routes: Routes = [
    {
        path: '',
        component: PrivateLayoutComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'nutrition', component: FoodComponent },
            { path: 'activity', component: ActivityComponent },
            { path: 'patients', component: PatientTraceComponent },
            { path: 'experts', component: ExpertsComponent },
            { path: 'counselee-profile', component: CounseleeProfileComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PrivateRoutingModule { }
