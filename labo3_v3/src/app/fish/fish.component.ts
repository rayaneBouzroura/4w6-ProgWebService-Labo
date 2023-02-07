import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {

  fishIds : number[] = [1,2,40,49,50,51,55,56,60,67];

  constructor() { }

  ngOnInit() {
  }

}
