import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(Reservation:any,...args:any): any{
    
    if(!Reservation || (args[0] ==='' && args[1]===""))
    {
      return Reservation;
    }
    else if(args[0]!=='' && args[1]!=="")
    {
      return Reservation.filter((Res:any) => Res.size.includes(args[0]) && Res.Time.includes(args[1]));
    }
    else if(args[1]==='')
    {
      return Reservation.filter((Res:any) => Res.size.includes(args[0]));
    }
    else
    {
      return Reservation.filter((Res:any) => Res.Time.includes(args[1]));
    }
  }

}
