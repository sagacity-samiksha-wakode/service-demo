import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api'
import {TestData} from './testdata';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(TestData),

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
