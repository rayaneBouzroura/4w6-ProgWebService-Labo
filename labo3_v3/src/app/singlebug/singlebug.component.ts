import { Creature } from './../models/creature';
import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-singlebug',
  templateUrl: './singlebug.component.html',
  styleUrls: ['./singlebug.component.css']
})
export class SinglebugComponent implements OnInit {

  @Input() bug : Creature | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
