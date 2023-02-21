import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Creature } from '../models/creature';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public httpClient: HttpClient) { }


  //method service qui recup la fifish
  async getFish(fishId: string): Promise<Creature> {

    let req = await lastValueFrom(this.httpClient.get<any>("http://acnhapi.com/v1/fish/" + fishId));
    console.log(req);

    return new Creature(req.id, req.name["name-USen"], req.availability.location, req.availability.rarity, req.price, req.icon_uri);
  }

  //method service pour recup les bibite
  async getBug(bugId : string) : Promise<Creature>{
    let req = await lastValueFrom(this.httpClient.get<any>("http://acnhapi.com/v1/bugs/" + bugId));
    console.log(req);
    return new Creature(req.id, req.name["name-USen"], req.availability.location, req.availability.rarity, req.price, req.icon_uri);
  }
}
