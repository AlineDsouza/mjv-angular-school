import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { SellComponent } from './sell/sell.component';



@NgModule({
  declarations: [
    ColaboradoresComponent,
    SellComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
