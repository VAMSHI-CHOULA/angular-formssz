import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title(title: any) {
        throw new Error('Method not implemented.');
    }
  // title = 'Angular 7 am Batch';
  // newtitle="Just for Checking whether is it part of main.js or not";
}