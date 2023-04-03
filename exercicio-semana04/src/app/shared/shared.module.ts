import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ReplacecolorDirective } from './directives/replacecolor.directive';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ReplacecolorDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
