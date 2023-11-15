import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(adatok:any, keresendo:any){
    if (!adatok) return null
    if (!keresendo || keresendo.length==0) return adatok
    adatok.filter(
      (sor:any)=>{ return sor.name.toLowerCase().includes(keresendo.toLowerCase())
      })
      return adatok
  }

}
