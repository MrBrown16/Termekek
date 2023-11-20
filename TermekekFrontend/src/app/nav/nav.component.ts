import { Component } from '@angular/core';
import { ConfigService } from '../config.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
messages:any
keresendo:any
constructor(private conf:ConfigService, private search:SearchService){
  conf.getMessages().subscribe(
    (res:any)=>{
      this.messages=res.nav
    }
  )
  search.getSearch().subscribe(
    (s)=>{this.keresendo=s}
  )
}

sendSearch(){
  this.search.setSearch(this.keresendo)
}

}
