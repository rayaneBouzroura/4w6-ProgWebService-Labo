import { DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {


  constructor(public data : DataService) { }

  ngOnInit() {
  }

}
