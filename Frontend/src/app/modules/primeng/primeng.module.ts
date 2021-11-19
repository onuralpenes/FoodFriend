import { NgModule } from "@angular/core";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { PickListModule } from 'primeng/picklist';
import {BadgeModule} from 'primeng/badge';

@NgModule({
    imports: [
        DialogModule,
        InputTextModule,
        TableModule,
        PaginatorModule,
        ButtonModule,
        ChartModule,
        ConfirmDialogModule,
        TabViewModule,
        PickListModule,
        BadgeModule
    ],
    exports: [
        DialogModule,
        InputTextModule,
        TableModule,
        PaginatorModule,
        ButtonModule,
        ChartModule,
        ConfirmDialogModule,
        TabViewModule,
        PickListModule,
        BadgeModule
    ]

})

export class PrimeNgModule { }