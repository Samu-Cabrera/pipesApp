import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicsPageComponent } from './basics-page/basics-page.component';
import { NumberPageComponent } from './number-page/number-page.component';
import { OncommonPageComponent } from './oncommon-page/oncommon-page.component';
import { OrderComponent } from './order/order.component';

import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumberPageComponent,
    OncommonPageComponent,
    OrderComponent,
    ToggleCasePipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
