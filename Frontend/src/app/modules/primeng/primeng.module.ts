import { NgModule } from "@angular/core";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';

@NgModule({
    imports: [
        DialogModule,
        InputTextModule,
        TableModule,
        PaginatorModule,
        ButtonModule,
        ChartModule,
        ConfirmDialogModule,
    ],
    exports: [
        DialogModule,
        InputTextModule,
        TableModule,
        PaginatorModule,
        ButtonModule,
        ChartModule,
        ConfirmDialogModule,
    ]

})

export class PrimeNgModule { }