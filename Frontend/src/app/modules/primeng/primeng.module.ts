import { NgModule } from "@angular/core";
import {DialogModule} from 'primeng/dialog';
import {  ChartModule } from 'primeng/chart';
@NgModule({
    imports:[
        DialogModule,
        ChartModule,
    ],
    exports:[
        DialogModule,
        ChartModule
    ]

})

export class PrimeNgModule {}