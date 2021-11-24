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
import { ConsumedCalorieComponent } from 'src/app/main-page/layout/dashboard/consumed-calorie/consumed-calorie.component';
import { DashboardComponent } from 'src/app/main-page/layout/dashboard/dashboard.component';
import { EatingHabitChartComponent } from 'src/app/main-page/layout/dashboard/eating-habit-chart/eating-habit-chart.component';
import { HealthCardComponent } from 'src/app/main-page/layout/dashboard/health-card/health-card.component';
import { ExpertShortCardComponent } from 'src/app/main-page/layout/experts/expert-short-card/expert-short-card.component';
import { ExpertsComponent } from 'src/app/main-page/layout/experts/experts.component';
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
import { UserFilterPipe } from 'src/app/helpers/user-filter.pipe';
import { PatientTarget } from 'src/app/main-page/layout/patient-trace/target/target.component';
import { PatientTargetCard } from 'src/app/main-page/layout/patient-trace/target-card/target-card.component';
import { ActivityListComponent } from 'src/app/main-page/layout/activity-list/activity-list.component';
import { PatientListComponent } from 'src/app/main-page/layout/patient-trace/patient-list.component';
import { PatientProfileComponent } from 'src/app/main-page/layout/patient-profile/patient-profile.component';
import { EatingActivityComponent } from 'src/app/main-page/layout/food/eating-activity.component';
import { CustomNutritionComponent } from 'src/app/main-page/layout/food/add-nutrition/custom-nutrition/custom-nutrition.component';
import { AddNutrition } from 'src/app/main-page/layout/food/add-nutrition/add-nutrition.component';
import { EditNutritionService } from 'src/app/helpers/edit-nutrition.service';
import { EditNutrition } from 'src/app/main-page/layout/food/edit-nutrition/edit-nutrition.component';
import { FoodListComponent } from 'src/app/main-page/layout/food-list/food-list.component';
import { CustomNutritionService } from 'src/app/helpers/custom-nutrition.service';
import { PatientActivityTable } from 'src/app/main-page/layout/patient-trace/patient-activity-table/patient-activity-table';
import { PatientNutritionTable } from 'src/app/main-page/layout/patient-trace/patient-nutrition-table/patient-nutrition-table';

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
    EatingActivityComponent,
    ActivityListComponent,
    HealthCardComponent,
    SurveyComponent,
    PatientListComponent,
    PatientNutritionTable,
    PatientActivityTable,
    PatientTarget,
    PatientTargetCard,
    ExpertsComponent,
    PatientProfileComponent,
    EditNutrition,
    ExpertShortCardComponent,
    ExpertFilterPipe,
    ActivityFilterPipe,
    UserFilterPipe,
    AddNutrition,
    AddIllness,
    AddAllergy,
    AddDisability,
    FoodListComponent,
    CustomNutritionComponent,
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
  providers: [ EditNutritionService, CustomNutritionService]
})
export class PrivateModule { }
