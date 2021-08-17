import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FooterComponent } from 'src/app/main-page/footer/footer.component';
import { HeaderComponent } from 'src/app/main-page/header/header.component';
import { LayoutComponent } from 'src/app/main-page/layout/layout.component';
import { MainComponent } from 'src/app/main-page/main/main.component';
import { SidebarComponent } from 'src/app/main-page/sidebar/sidebar.component';
import { CustomMAterialModule } from '../material/material.module';
import { PrivateLayoutComponent } from './private-layout.component';
import { PrivateRoutingModule } from './private-routing.module';

@NgModule({
  declarations: [
    PrivateLayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    MainComponent,
  ],
  imports: [PrivateRoutingModule, CustomMAterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrivateModule {}
