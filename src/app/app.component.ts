import { Component ,OnInit, OnDestroy} from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { rawListeners } from 'process';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, OnDestroy 
{
  title= 'flex-titorial';
  mediaSub: Subscription = new Subscription;
  deviceXs!: boolean;
  constructor(public mediaObserver:MediaObserver){}
  ngOnInit(){
    this.mediaSub =this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      (result: MediaChange)=>{
console.log(result.mqAlias);
this.deviceXs =result.mqAlias === 'xs' ? true :false;
}
  });
  }
  ngOnDestroy(){
        this.mediaSub.unsubscribe();
  }
}
//     title=(title: any) 
//     {implements OnInit, OnDestroy 
//     }
//   title = 'Angular 7 am Batch';
//   newtitle="Just for Checking whether is it part of main.js or not";
// }
// Monna cheskunna git youtube video dhi youtube lane search cheskoni next nuvvu adhi chuskunta malli adhi follow ayyi fapp dhi send chesesko github ki ok?
// a: ok rawListeners.
