import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentlist',
  template: `
  
  `,
  styles: [

  ]
})
export class StudentlistComponent implements OnInit {
  public students =[];
  // private _stdService: any;
  constructor() { }
  ngOnInit() {
   
  }
}


