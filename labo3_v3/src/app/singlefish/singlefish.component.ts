import { HttpService } from './../http.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Creature } from '../models/creature';

@Component({
  selector: 'app-singlefish',
  templateUrl: './singlefish.component.html',
  styleUrls: ['./singlefish.component.css']
})
export class SinglefishComponent implements OnInit {

  fish: Creature | null = null;

  constructor(public httpClient: HttpClient, public route: ActivatedRoute , public serviceHTTP : HttpService) { }

  async ngOnInit() {

    let id = this.route.snapshot.paramMap.get("id");
    if (id != null && parseInt(id) < 80) {
      this.fish = await this.serviceHTTP.getFish(id);
    }

  }

  // async getFish(fishId: string): Promise<Creature> {

  //   let req = await lastValueFrom(this.httpClient.get<any>("http://acnhapi.com/v1/fish/" + fishId));
  //   console.log(req);
  //   return new Creature(req.id, req.name["name-USen"], req.availability.location, req.availability.rarity, req.price, req.icon_uri);

  // }

}
