import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterFormComponent } from './register-form/register-form.component';
import { PrivateModule } from './modules/private/private.module';
import { CustomMaterialModule } from './modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CounseleeProfileComponent } from './main-page/layout/counselee-profile/counselee-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CounseleeProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PrivateModule,
    CustomMaterialModule,
    ReactiveFormsModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
