import { Component, OnInit } from '@angular/core';
import {  FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
userForm: FormGroup;
submitted = false;
listData: any;
i:number | undefined;
  constructor(private fb:FormBuilder,private customValidator: CustomvalidationService) {
    this.listData=[];
    this.userForm =this.fb.group({
      name:[' ', Validators.required],
      designnation:['',Validators.required],
      salary:[' ',Validators.required],
      email:['',Validators.required],
      mobile:[' ',Validators.required],
      qualification:['',Validators.required],
      manager:['',Validators.required]
    })
  }
  public addItem(): void{
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }
  reset(){
    this.userForm.reset();
  }
  removeItem(element: any){
    this.listData.forEach((value: any, index: any)=> {
      if(value == element)
      this.listData.splice(index,1);
    });
  }
  // public onEditItem: any{
    // this.listData
  //   console.log(this.userForm[])
  // }
    ngOnInit(){  
      this.userForm = this.fb.group({
        name: ['', Validators.required],
    });
  }
    onSubmit() {
      this.submitted = true;
      if (this.userForm.valid) {
        alert('Form Submitted succesfully!!!\n Check the values in browser console.');
        console.table(this.userForm.value);
      }
  }
}