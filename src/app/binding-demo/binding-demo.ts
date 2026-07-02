import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  standalone: false,
  templateUrl: './binding-demo.html',
  styleUrl: './binding-demo.css',
})
export class BindingDemo {
  testo = "Ciao, Mondo!!!";
  testo1 = "Ciao";
  testo2 = "HALLO";
  twoWayText = "TwoWayB";
  //testoPipe = "Ciao";

  aggiornaTesto(nuovoValore: string){
    this.testo1 = nuovoValore;
  }
  aggiornaTesto2(nuovoValore: string){
    this.testo2 = nuovoValore;
  }
}
