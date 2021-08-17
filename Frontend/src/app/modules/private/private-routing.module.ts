import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from 'src/app/main-page/layout/activity/activity.component';
import { DashboardComponent } from 'src/app/main-page/layout/dashboard/dashboard.component';
import { FoodComponent } from 'src/app/main-page/layout/food/food.component';
import { ProfileComponent } from 'src/app/main-page/layout/profile/profile.component';
import { PrivateLayoutComponent } from './private-layout.component';

const routes: Routes = [
    {
        path: '',
        component: PrivateLayoutComponent,
        children: [
            { path: 'profile', component: ProfileComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'food', component: FoodComponent },
            { path: 'activity', component: ActivityComponent },
        ],
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PrivateRoutingModule { }