import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  url='http://localhost:3000/products/'

  termekekSub:any=new BehaviorSubject([{}])

  constructor(private http:HttpClient) {this.downloadProducts() }
  
  

  

  deleteProduct(id:any){
    return this.http.delete(this.url+id).subscribe(
      ()=>this.downloadProducts()
    )
  }

  updateProduct(body:any){
    return this.http.put(this.url+body.id,body).subscribe(
      ()=>this.downloadProducts()
    )
  }

  addProduct(body:any){
    return this.http.post(this.url,body).subscribe(
      ()=>this.downloadProducts()
    )
  }

  getProducts(){
    return this.termekekSub;
  }

  private downloadProducts(){
    return this.http.get(this.url).subscribe((a)=>{
      this.termekekSub.next(a)

    })
  }
}
