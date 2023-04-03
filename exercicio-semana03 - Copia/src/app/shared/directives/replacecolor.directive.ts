import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appReplacecolor]'
})
export class ReplacecolorDirective {

  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.background= "#726CE5";
   }

}
