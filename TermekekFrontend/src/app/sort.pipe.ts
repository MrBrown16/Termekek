import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(adatok:any,mezo:any,irany:any) {
    if(!adatok) return null
    console.log("sortPipe adatok: ",adatok)
    console.log("sortPipe mezo: ",mezo)
    console.log("sortPipe irany: ",irany)
    if(!mezo) return adatok


    adatok.sort(
      (a:any,b:any)=>{return a[mezo].localeCompare(b[mezo],{sensitivity:'base'})}
      )

      if (!irany) adatok.reverse()
    
    return adatok;

  }

}
