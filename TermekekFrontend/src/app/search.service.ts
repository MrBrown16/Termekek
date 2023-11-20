import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // searchSub = new BehaviorSubject([])
  searchSub = new Subject()
  constructor() { }

  getSearch(){
    return this.searchSub
  }

  setSearch(keresendo:any){
    this.searchSub.next(keresendo)
  }
}
