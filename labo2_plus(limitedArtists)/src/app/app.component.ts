import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  result = false;
  artistName : string = "";
  similarArtistNames : string[] = [];

  constructor(public httpClient : HttpClient){}

  async searchArtist():Promise<void>{
    this.result = true;
    let requestResult =await lastValueFrom(this.httpClient.get<any>("http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&api_key=e34ebf8561ba7c653a21d1d99a1a0070&format=json&artist=" + this.artistName));
    console.log(requestResult);
    let similarArtists:any[] = requestResult.similarartists.artist;
    for(let similarArtist of similarArtists){
      this.similarArtistNames.push(similarArtist.name);
    }
  }

  newSearch():void{
    this.result = false;
    this.artistName = "";
    this.similarArtistNames = [];
  }
}
