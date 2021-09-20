import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Validators,  FormGroup, FormBuilder } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';
// import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit{
  private mySubscription!: Subscription;
  registerForm!: FormGroup;
  submitted = false;
  listData: any;

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
  )
  { this.listData=[];
    this.registerForm =this.fb.group({
      name:[' ', Validators.required],
      designnation:['',Validators.required],
      salary:[' ',Validators.required],
      email:['',Validators.required],
      mobile:[' ',Validators.required],
      qualification:['',Validators.required],
      manager:['',Validators.required]
    })
  }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      salary: ['', Validators.required],
      designnation:['', Validators.required],
      email:['',Validators.required, Validators.email],
      mobile:['',Validators.required],
      qualification:['',Validators.required],
      manager:['',Validators.required],
    });
  }
  public addItem(): void{
    this.listData.push(this.registerForm.value);
    this.registerForm.reset();
  }
  get registerFormControl() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerForm.value);
    }
  }
}