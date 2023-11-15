import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-karbantartas',
  templateUrl: './karbantartas.component.html',
  styleUrls: ['./karbantartas.component.css']
})
export class KarbantartasComponent {

  products:any
  oszlopok:any
  newProduct:any={}
  keresendo:any

  mezo:any
  irany=false

  constructor(private base:BaseService, private conf:ConfigService){
    this.base.getProducts().subscribe((adatok:any)=>this.products=adatok)
    this.oszlopok=this.conf.getProductsCols()
  }

  sort(key:any, type:any){
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
