import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-karbantartas',
  templateUrl: './karbantartas.component.html',
  styleUrls: ['./karbantartas.component.css']
})
export class KarbantartasComponent {
  config:any
  lblsearch:any
  products:any
  oszlopok:any
  newProduct:any={}
  keresendo:any
  muveletek:any
  mezo:any
  irany=true
  karbantartas:any
  constructor(private base:BaseService, private conf:ConfigService, private search:SearchService){
    this.base.getProducts().subscribe((adatok:any)=>this.products=adatok)
    this.config=this.conf.getMessages().subscribe(
      (res:any)=>{
        this.oszlopok=res.karbantartas.termekOszlopok
        this.karbantartas=res.karbantartas
        this.lblsearch=res.nav.search
      }
    )
    search.getSearch().subscribe(
      (s)=>{this.keresendo=s}
    )
  }

  sort(key:any){
    this.mezo=key
    this.irany=!this.irany
  }

  addProduct(){
    this.base.addProduct(this.newProduct)
    this.newProduct={}
  }
  updateProduct(){
    this.base.updateProduct(this.newProduct)
  }
  deleteProduct(id:any){
    this.base.deleteProduct(id)
  }
}
