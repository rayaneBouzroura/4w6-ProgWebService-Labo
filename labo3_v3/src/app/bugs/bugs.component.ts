import { HttpService } from '../services/http.service';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Creature } from '../models/creature';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

  selectedBug ?: Creature;
  bugIds : number[] = this.data.bugIds;

  constructor(public httpClient : HttpClient , public data : DataService ,public serviceHTTP : HttpService) { }

  ngOnInit() {
  }

  async selectBug(id : number){
    this.selectedBug = await this.serviceHTTP.getBug(id.toString());
  }

  // async getBug(bugId : string) : Promise<Creature>{
  //   let req = await lastValueFrom(this.httpClient.get<any>("http://acnhapi.com/v1/bugs/" + bugId));
  //   console.log(req);
  //   return new Creature(req.id, req.name["name-USen"], req.availability.location, req.availability.rarity, req.price, req.icon_uri);
  // }

}
