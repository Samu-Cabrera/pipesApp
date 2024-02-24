import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './basics-page/basics-page.component';
import { NumberPageComponent } from './number-page/number-page.component';
import { OncommonPageComponent } from './oncommon-page/oncommon-page.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsPageComponent
  },
  {
    path: 'numbers',
    component: NumberPageComponent
  }, 
  {
    path: 'uncommon',
    component: OncommonPageComponent
  }, 
  {
    path: 'custom',
    component: OrderComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
