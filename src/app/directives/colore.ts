import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColore]',
  standalone: false,
})
export class Colore {
  constructor(el: ElementRef){
    el.nativeElement.style.color = 'red';
  }
}
