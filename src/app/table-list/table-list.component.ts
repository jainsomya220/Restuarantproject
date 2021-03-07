import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  sizes:Number[]=[];
  size:string;
  time="";
  baseurl:string="";
  Reservedtables:any=[];
  constructor(private http:HttpClient) {
    this.sizes=[2,4,6,8];
    this.size="";
    this.baseurl="http://localhost:3000/Reservations";
   }

  ngOnInit(): void {
    this.getReservationdata();
  }

  getReservationdata(){

       this.http.get(this.baseurl).subscribe(data=>{
            this.Reservedtables=data;
       })
  }

}
