import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSfondo]',
  standalone: false,
})
export class Sfondo {
  constructor(el: ElementRef){
    el.nativeElement.style.backgroundColor = 'black';
  }
}
