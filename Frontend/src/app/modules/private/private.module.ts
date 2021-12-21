import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ExpertFilterPipe } from '../../helpers/expert-filter.pipe';
import { CustomMaterialModule } from '../material/material.module';
import { PrivateLayoutComponent } from './private-layout.component';
import { PrivateRoutingModule } from './private-routing.module';
import { PrimeNgModule } from '../primeng/primeng.module';
import { ActivityFilterPipe } from 'src/app/helpers/activity-filter.pipe';
import { UserFilterPipe } from 'src/app/helpers/user-filter.pipe';
import { SideBarComponent } from 'src/app/content/layout/side-bar/side-bar.component';
import { FooterComponent } from 'src/app/content/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/content/layout/header/header.component';
import { ActivityListComponent } from 'src/app/content/pages/activity-list/activity-list.component';
import { ProfileComponent } from 'src/app/content/pages/profile/profile.component';
import { DashboardComponent } from 'src/app/content/pages/dashboard/dashboard.component';
import { SettingsComponent } from 'src/app/content/pages/settings/settings.component';
import { EatingHabitChartComponent } from 'src/app/content/pages/dashboard/eating-habit-chart/eating-habit-chart.component';
import { ConsumedCalorieComponent } from 'src/app/content/pages/dashboard/consumed-calorie/consumed-calorie.component';
import { PieChartThreedComponent } from 'src/app/content/pages/dashboard/pie-chart-threed/pie-chart-threed.component';
import { EatingActivityComponent } from 'src/app/content/pages/eating-activity/eating-activity.component';
import { HealthCardComponent } from 'src/app/content/pages/dashboard/health-card/health-card.component';
import { SurveyComponent } from 'src/app/content/pages/profile/survey/survey.component';
import { PatientListComponent } from 'src/app/content/pages/patient-trace/patient-list.component';
import { PatientNutritionTable } from 'src/app/content/pages/patient-trace/patient-nutrition-table/patient-nutrition-table';
import { PatientActivityTable } from 'src/app/content/pages/patient-trace/patient-activity-table/patient-activity-table';
import { ExpertsComponent } from 'src/app/content/pages/experts/experts.component';
import { PatientProfileComponent } from 'src/app/content/pages/patient-profile/patient-profile.component';
import { EditEatingActivity } from 'src/app/content/pages/eating-activity/edit-eating-activity/edit-eating-activity.component';
import { ExpertShortCardComponent } from 'src/app/content/pages/experts/expert-short-card/expert-short-card.component';
import { AddIllness } from 'src/app/content/pages/profile/survey/add-illness/add-illness.component';
import { AddAllergy } from 'src/app/content/pages/profile/survey/add-allergy/add-allergy.component';
import { AddDisability } from 'src/app/content/pages/profile/survey/add-disable/add-disability.component';
import { FoodListComponent } from 'src/app/content/pages/food-list/food-list.component';
import { CustomFoodComponent } from 'src/app/content/pages/eating-activity/add-eating-activity/custom-food/custom-food.component';
import { AddEatingActivity } from 'src/app/content/pages/eating-activity/add-eating-activity/add-eating-activity.component';
import { EditEatingActivityService } from 'src/app/helpers/edit-eating-activity.service';
import { CustomFoodService } from 'src/app/helpers/custom-food.service';
import { CreateGoalComponent } from 'src/app/content/pages/goals/create-goal/create-goal.component';
import { GoalCardComponent } from 'src/app/content/pages/goals/goal-card/goal-card.component';
import { CalendarComponent } from 'src/app/content/pages/calendar/calendar.component';
import { GoalsComponent } from 'src/app/content/pages/goals/goals.component';
import { LoadingComponent } from '../../helpers/loading/loading.component';
import { RelatedExpertsComponent } from 'src/app/content/pages/profile/related-experts/related-experts.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
]);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    PrivateLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
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
    CreateGoalComponent,
    GoalsComponent,
    GoalCardComponent,
    ExpertsComponent,
    PatientProfileComponent,
    EditEatingActivity,
    ExpertShortCardComponent,
    ExpertFilterPipe,
    ActivityFilterPipe,
    UserFilterPipe,
    AddEatingActivity,
    AddIllness,
    AddAllergy,
    AddDisability,
    FoodListComponent,
    CustomFoodComponent,
    PieChartThreedComponent,
    CalendarComponent,
    LoadingComponent,
    RelatedExpertsComponent
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
    FullCalendarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [EditEatingActivityService, CustomFoodService]
})
export class PrivateModule { }
