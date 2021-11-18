import { NgModule } from "@angular/core";
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
@NgModule({
    imports: [
        DialogModule,
        InputTextModule,
        TableModule,
        PaginatorModule,
        ButtonModule,
        ChartModule,
        ToastModule
    ],
    exports: [
        DialogModule,
        InputTextModule,
        TableModule,
        PaginatorModule,
        ButtonModule,
        ChartModule,
        ToastModule
    ]

})

export class PrimeNgModule { }