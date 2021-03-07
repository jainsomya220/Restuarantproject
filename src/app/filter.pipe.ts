import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(Reservation:any,...args:any): any{
    console.log("this is the value1",args[0]);
    console.log("value 2",args[1]);
    console.log("reservation is",Reservation);
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
      console.log("inside elsse");
      return Reservation.filter((Res:any) => Res.size.includes(args[0]));
    }
    else
    {
      return Reservation.filter((Res:any) => Res.Time.includes(args[1]));
    }
  }

}
