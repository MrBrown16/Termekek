import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(adatok:any, keresendo:any){
    if (!adatok) return null
    if (!keresendo || keresendo.length==0) return adatok
    console.log("keresendo: ",keresendo)
    // return adatok.filter((sor:any)=> sor.name.toLowerCase().includes(keresendo.toLowerCase()))
    return adatok.filter((sor:any)=> {
      for (const mezo in sor) {   
        console.log("-------------------")
        console.log("mezo",mezo)      
        console.log("sor",sor)      
        console.log("sor[mezo]",sor[mezo])      
        console.log("typeof sor[mezo]",typeof(sor[mezo]))      
        if (typeof(sor[mezo])=="number"){ 
          console.log("number first if")         
          if  (sor[mezo]==Number(keresendo.replace(",",".")))     
            console.log("number second if")         
          return true
      }
      else if (sor[mezo].toLowerCase().includes(keresendo.toLowerCase()))
      console.log("else not number")
      return true
  }
  return false
  })
}


}
