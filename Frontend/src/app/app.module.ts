import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PrivateModule } from './modules/private/private.module';
import { CustomMaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpEntityRepositoryService } from './services/http-entity-repository.service';
import { PrimeNgModule } from './modules/primeng/primeng.module';
import { LoginComponent } from './content/login/login.component';
import { LoginFormComponent } from './content/login/login-form/login-form.component';
import { RegisterFormComponent } from './content/login/register-form/register-form.component';
import { NotFoundComponent } from './content/pages/not-found/not-found.component';
import { RoleGuardService, UserRolesService } from './services/can-active.guard';
import { ConfirmationService, MessageService } from 'primeng/api';
//import { AllProffessionalsComponent } from './content/pages/all-proffessionals/all-proffessionals.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PrivateModule,
    PrimeNgModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [AppComponent],
  providers: [HttpEntityRepositoryService, RoleGuardService, UserRolesService, MessageService, ConfirmationService]
})
export class AppModule { }
