import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Creature } from '../models/creature';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

  selectedBug ?: Creature;
  bugIds : number[] = [2,8,14,16,24,35,41,43,67,69];

  constructor(public httpClient : HttpClient) { }

  ngOnInit() {
  }

  async selectBug(id : number){
    this.selectedBug = await this.getBug(id.toString());
  }

  async getBug(bugId : string) : Promise<Creature>{
    let req = await lastValueFrom(this.httpClient.get<any>("http://acnhapi.com/v1/bugs/" + bugId));
    console.log(req);
    return new Creature(req.id, req.name["name-USen"], req.availability.location, req.availability.rarity, req.price, req.icon_uri);
  }

}
