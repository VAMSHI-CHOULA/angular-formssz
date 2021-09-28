import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { PipesComponent } from './pipes/pipes.component';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MdButtonModule } from '@angular/material';
// import { StudentlistComponent } from './studentlist/studentlist.component';
// import { StudentDetailsComponent } from './student-details/student-details.component';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { MediaObserver, MediaChange } from '@angular/flex-layout';
// import {Subscription } from 'rxjs';
// import { YComponent } from './y/y.component';
// import { VisitingcardComponent } from './visitingcard/visitingcard.component';
// import { ProdutComponent } from './produt/produt.component';
// import { DatabindingComponent } from './databinding/databinding.component';
@NgModule({
  declarations: [
    AppComponent,
    EmpDetailsComponent,
    PipesComponent,
    HeaderComponent,
    // StudentlistComponent,
    // StudentDetailsComponent,
    // VisitingcardComponent,
    //    ProdutComponent,
    //    DatabindingComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    // MdtButtonModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}