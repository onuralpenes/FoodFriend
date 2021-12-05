import { NgModule } from "@angular/core";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { TabViewModule } from 'primeng/tabview';
import { PickListModule } from 'primeng/picklist';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { CheckboxModule } from 'primeng/checkbox';

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
        BadgeModule,
        CardModule,
        MenuModule,
        RippleModule,
        CheckboxModule,
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
        BadgeModule,
        CardModule,
        MenuModule,
        RippleModule,
        CheckboxModule,
    ]

})

export class PrimeNgModule { }
