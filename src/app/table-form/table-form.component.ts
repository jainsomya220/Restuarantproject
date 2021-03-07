import { Component, OnInit ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder,Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService }  from 'ngx-toastr';
@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css'],
  providers: [NgbTimepickerConfig]
})
export class TableFormComponent implements OnInit {
  
  tab="0";
  table:Number[]=[];
  TableForm = this.fb.group({
    size: ['',Validators.required],
    location: [''],
    Time:['',Validators.required],
    Description:['Enter Description']
  });
  baseurl="";
  success=false;

  get size() { return this.TableForm.get('size'); }

  get Time() { return this.TableForm.get('Time'); }

  constructor(private fb:FormBuilder,private toastr:ToastrService,private http:HttpClient,private router:Router) { 
      this.table=[2,4,6,8];
      this.baseurl="http://localhost:3000/Reservations";
      
  }

  ngOnInit(): void {
     
  }

  selected(){
    console.log("this is selected",this.tab);
  }

  onsubmit(){
    console.log(this.TableForm.value);
    if(this.TableForm.valid)
    {
      this.http.post(this.baseurl,this.TableForm.value).subscribe(_data=>{
        this.success=true;
      });
    }
  }

}
