import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BodyComponent } from 'src/app/main-page/body/body.component';
import { FooterComponent } from 'src/app/main-page/footer/footer.component';
import { HeaderComponent } from 'src/app/main-page/header/header.component';
import { CustomMaterialModule } from '../material/material.module';
import { PrivateLayoutComponent } from './private-layout.component';
import { PrivateRoutingModule } from './private-routing.module';

@NgModule({
    declarations: [
        PrivateLayoutComponent,
        HeaderComponent,
        FooterComponent,
        BodyComponent,
    ],
    imports: [CommonModule,PrivateRoutingModule, CustomMaterialModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class PrivateModule { }
