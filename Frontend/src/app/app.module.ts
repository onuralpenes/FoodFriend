import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProfileComponent } from './main-page/layout/profile/profile.component';
import { PrivateModule } from './modules/private/private.module';
import { CustomMaterialModule } from './modules/material/material.module';
import { DashboardComponent } from './main-page/layout/dashboard/dashboard.component';
import { EatingHabitChartComponent } from './main-page/layout/dashboard/eating-habit-chart/eating-habit-chart.component';
import { FoodIngredientDistributionChartComponent } from './main-page/layout/dashboard/food-ingredient-distribution-chart/food-ingredient-distribution-chart.component';
import { EnergyConsumptionChartComponent } from './main-page/layout/dashboard/energy-consumption-chart/energy-consumption-chart.component';
import { ConsumedCalorieComponent } from './main-page/layout/dashboard/consumed-calorie/consumed-calorie.component';
import { FoodComponent } from './main-page/layout/food/food.component';
import { FoodTableComponent } from './main-page/layout/food/food-table/food-table.component';
import { ActivityComponent } from './main-page/layout/activity/activity.component';
import { ActivityTableComponent } from './main-page/layout/activity/activity-table/activity-table.component';
import { HealthCardComponent } from './main-page/layout/dashboard/health-card/health-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
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
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PrivateModule,
    CustomMaterialModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
