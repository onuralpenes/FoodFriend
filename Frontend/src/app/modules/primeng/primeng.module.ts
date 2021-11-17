import { NgModule } from "@angular/core";
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
    imports:[
        DialogModule,
        InputTextModule,
        TableModule,
        PaginatorModule
    ],
    exports:[
        DialogModule,
        InputTextModule,
        TableModule,
        PaginatorModule
    ]

})

export class PrimeNgModule {}