import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { PipesComponent } from './pipes/pipes.component';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// import { YComponent } from './y/y.component';
// import { VisitingcardComponent } from './visitingcard/visitingcard.component';
// import { ProdutComponent } from './produt/produt.component';
// import { DatabindingComponent } from './databinding/databinding.component';
@NgModule({
  declarations: [
    AppComponent,
    EmpDetailsComponent,
    PipesComponent,
   
    // VisitingcardComponent,
    //    ProdutComponent,
    //    DatabindingComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
