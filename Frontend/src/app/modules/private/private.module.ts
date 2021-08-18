import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BodyComponent } from 'src/app/main-page/body/body.component';
import { FooterComponent } from 'src/app/main-page/footer/footer.component';
import { HeaderComponent } from 'src/app/main-page/header/header.component';
import { ActivityTableComponent } from 'src/app/main-page/layout/activity/activity-table/activity-table.component';
import { ActivityComponent } from 'src/app/main-page/layout/activity/activity.component';
import { ConsumedCalorieComponent } from 'src/app/main-page/layout/dashboard/consumed-calorie/consumed-calorie.component';
import { DashboardComponent } from 'src/app/main-page/layout/dashboard/dashboard.component';
import { EatingHabitChartComponent } from 'src/app/main-page/layout/dashboard/eating-habit-chart/eating-habit-chart.component';
import { EnergyConsumptionChartComponent } from 'src/app/main-page/layout/dashboard/energy-consumption-chart/energy-consumption-chart.component';
import { FoodIngredientDistributionChartComponent } from 'src/app/main-page/layout/dashboard/food-ingredient-distribution-chart/food-ingredient-distribution-chart.component';
import { HealthCardComponent } from 'src/app/main-page/layout/dashboard/health-card/health-card.component';
import { FoodTableComponent } from 'src/app/main-page/layout/food/food-table/food-table.component';
import { FoodComponent } from 'src/app/main-page/layout/food/food.component';
import { ProfileComponent } from 'src/app/main-page/layout/profile/profile.component';
import { CustomMaterialModule } from '../material/material.module';
import { PrivateLayoutComponent } from './private-layout.component';
import { PrivateRoutingModule } from './private-routing.module';

@NgModule({
    declarations: [
        PrivateLayoutComponent,
        HeaderComponent,
        FooterComponent,
        BodyComponent,
        ProfileComponent,
        DashboardComponent,
        EatingHabitChartComponent,
        FoodIngredientDistributionChartComponent,
        EnergyConsumptionChartComponent,
        ConsumedCalorieComponent,
        FoodComponent,
        FoodTableComponent,
        ActivityComponent,
        ActivityTableComponent,
        HealthCardComponent,
    ],
    imports: [CommonModule, PrivateRoutingModule, CustomMaterialModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class PrivateModule { }
