import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  fishIds : number[] = [1,2,40,49,50,51,55,56,60,67];
  bugIds : number[] = [2,8,14,16,24,35,41,43,67,69];

  constructor() { }

  ngOnInit() {
  }

}
