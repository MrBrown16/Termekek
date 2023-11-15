import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private termekOszlopok=[
    {key:"id", text:"#", type:"plain"},
    {key:"name", text:"Név", type:"text"},
    {key:"price", text:"Ár", type:"number"},
    {key:"description", text:"Leírás", type:"text"},
    {key:"image_url", text:"Kép", type:"text"},
  ]

  constructor() { 
  }
  getProductsCols(){
    return this.termekOszlopok
  }


}
