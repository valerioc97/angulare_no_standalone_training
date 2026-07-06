import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  standalone: false,
  templateUrl: './directive-demo.html',
  styleUrl: './directive-demo.css',
})
export class DirectiveDemo {

  number = 0;
  number1 = 0;

  abilitaInput(input: number){
    if(input >= 10){
      return true;
    }else{
      return false;
    }
  }

  salvaNumero(input: string){
    this.number1 = parseInt(input);
  }

}
