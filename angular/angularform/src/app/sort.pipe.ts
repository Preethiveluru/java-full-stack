import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[],args:string):any[] {
     let res:any[]=[];
    if(args==='ascending'){
      res=value.sort();
    }

    if(args==='descending'){
      res=value.sort().reverse();
    }

    if(args ==='reverse'){
      res= value.reverse()
    }
    return res





    
  }

}
