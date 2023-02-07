import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FishComponent } from './fish/fish.component';
import { BugsComponent } from './bugs/bugs.component';
import { IndexComponent } from './index/index.component';
import { SinglefishComponent } from './singlefish/singlefish.component';
import { RouterModule } from '@angular/router';
import { SinglebugComponent } from './singlebug/singlebug.component';

@NgModule({
  declarations: [						
    AppComponent,
      FishComponent,
      BugsComponent,
      IndexComponent,
      SinglefishComponent,
      SinglebugComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      // o	Le composant index soit affiché par défaut et avec la route localhost:4200/index
      {path: "",redirectTo:"/index",pathMatch:"full"},
      {path: "index",component : IndexComponent},      
      {path :"bugs",component : BugsComponent},
      {path :"fish",component : FishComponent},
      {path :"fish/:id",component : SinglefishComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
