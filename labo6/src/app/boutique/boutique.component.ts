import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  formatLabel(value: number) {
    return value + "°c";
  }

  commander() : void{
    alert("Nous préparons votre commande !");
  }

}
