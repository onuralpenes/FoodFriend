import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BodyComponent } from 'src/app/main-page/body/body.component';
import { FooterComponent } from 'src/app/main-page/footer/footer.component';
import { HeaderComponent } from 'src/app/main-page/header/header.component';
import { ActivityComponent } from 'src/app/main-page/layout/activity/activity.component';
import { CounseleeProfileComponent } from 'src/app/main-page/layout/counselee-profile/counselee-profile.component';
import { ConsumedCalorieComponent } from 'src/app/main-page/layout/dashboard/consumed-calorie/consumed-calorie.component';
import { DashboardComponent } from 'src/app/main-page/layout/dashboard/dashboard.component';
import { EatingHabitChartComponent } from 'src/app/main-page/layout/dashboard/eating-habit-chart/eating-habit-chart.component';
import { HealthCardComponent } from 'src/app/main-page/layout/dashboard/health-card/health-card.component';
import { ExpertShortCardComponent } from 'src/app/main-page/layout/experts/expert-short-card/expert-short-card.component';
import { ExpertsComponent } from 'src/app/main-page/layout/experts/experts.component';
import { FoodListComponent } from 'src/app/main-page/layout/food-list/food-list.component';
import { AddFood } from 'src/app/main-page/layout/food/food-table/add-food/add-food.component';
import { CustomFoodComponent } from 'src/app/main-page/layout/food/food-table/add-food/custom-food/custom-food.component';
import { EditFood } from 'src/app/main-page/layout/food/food-table/edit-food/edit-table.component';
import { FoodComponent } from 'src/app/main-page/layout/food/food.component';
import { ActivityTable } from 'src/app/main-page/layout/patient-trace/patient-trace-table/activity-table/activity-table.component';
import { NutritionTable } from 'src/app/main-page/layout/patient-trace/patient-trace-table/nutrition-table/nutrition-table.component';
import { PatientTraceTableComponent } from 'src/app/main-page/layout/patient-trace/patient-trace-table/patient-trace-table.component';
import { PatientTargetCard } from 'src/app/main-page/layout/patient-trace/patient-trace-table/target-card/target-card.component';
import { PatientTarget } from 'src/app/main-page/layout/patient-trace/patient-trace-table/target/target.component';
import { PatientTraceComponent } from 'src/app/main-page/layout/patient-trace/patient-trace.component';
import { ProfileComponent } from 'src/app/main-page/layout/profile/profile.component';
import { AddAllergy } from 'src/app/main-page/layout/profile/survey/add-allergy/add-allergy.component';
import { AddDisability } from 'src/app/main-page/layout/profile/survey/add-disable/add-disability.component';
import { AddIllness } from 'src/app/main-page/layout/profile/survey/add-illness/add-illness.component';
import { SurveyComponent } from 'src/app/main-page/layout/profile/survey/survey.component';
import { SettingsComponent } from 'src/app/main-page/layout/settings/settings.component';
import { ExpertFilterPipe } from '../../helpers/expert-filter.pipe';
import { CustomMaterialModule } from '../material/material.module';
import { PrivateLayoutComponent } from './private-layout.component';
import { PrivateRoutingModule } from './private-routing.module';
import { PrimeNgModule } from '../primeng/primeng.module';
import { ActivityFilterPipe } from 'src/app/helpers/activity-filter.pipe';
import { EditService } from 'src/app/helpers/edit.service';
import { CustomFoodService } from 'src/app/helpers/custom-food.pipe';
import { FoodTableComponent } from 'src/app/main-page/layout/food/food-table/food-table.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    PrivateLayoutComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ProfileComponent,
    DashboardComponent,
    SettingsComponent,
    EatingHabitChartComponent,
    ConsumedCalorieComponent,
    FoodComponent,
    FoodTableComponent,
    ActivityComponent,
    HealthCardComponent,
    SurveyComponent,
    PatientTraceComponent,
    PatientTraceTableComponent,
    NutritionTable,
    ActivityTable,
    PatientTarget,
    PatientTargetCard,
    ExpertsComponent,
    CounseleeProfileComponent,
    EditFood,
    ExpertShortCardComponent,
    ExpertFilterPipe,
    ActivityFilterPipe,
    AddFood,
    AddIllness,
    AddAllergy,
    AddDisability,
    CustomFoodComponent,
    FoodListComponent,
    CustomFoodComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    CustomMaterialModule,
    PrimeNgModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ EditService, CustomFoodService]
})
export class PrivateModule { }
