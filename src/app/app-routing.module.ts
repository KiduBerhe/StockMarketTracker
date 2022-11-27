import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockListComponent } from './stock-list/stock-list.component';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';

import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: 'stock', component: StockListComponent},
  {path: 'create-stock', component: CreateStockComponent},
  {path: '', redirectTo: 'stocks', pathMatch: 'full'},
  {path: 'update-stock/:id', component: UpdateStockComponent},
  {path: 'stock-details/:id', component:StockDetailsComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    //CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
