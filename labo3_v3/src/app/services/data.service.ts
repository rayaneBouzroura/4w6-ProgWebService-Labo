import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  bugIds : number[] = [2,8,14,16,24,35,41,43,67,69];
  fishIds : number[] = [1,2,40,49,50,51,55,56,60,67];

constructor() { }

}
