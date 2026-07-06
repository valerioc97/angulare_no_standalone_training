import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFont]',
  standalone: false,
})
export class Font {
  constructor(el: ElementRef){
    el.nativeElement.style.fontFamily = 'Arial black';
  }
}
