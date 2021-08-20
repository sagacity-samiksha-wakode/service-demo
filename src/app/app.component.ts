import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import {TestData} from './testdata';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api'
import { Book } from './book';
import {FormControl, FormBuilder , FormGroup, Validators} from '@angular/forms'
import { Observable, observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})
export class AppComponent  {
  title:any ='samiksha';
  datasaved=false;
  bookForm:any=FormGroup;
  allbooks: Observable<Book[]> | undefined;

  bookidToUpdate:any;

constructor(private formbuilder:FormBuilder ,private DataService:DataService)
{}
ngOnInit() {
  this.bookForm=this.formbuilder.group({
    employee_name:['', [Validators.required]],
    employee_salary:['', [Validators.required]],
    employee_age:['', [Validators.required]],
});

  this.getsoftBooks();
}

bookEdit(bookid:any)
{
  this.DataService.getbookbytid(bookid).subscribe(book=>{
    this.bookidToUpdate=bookid;

    this.bookForm.controls['employee_name'].setValue(book.employee_name);
    this.bookForm.controls['employee_salary'].setValue(book.employee_salary);
    this.bookForm.controls['employee_age'].setValue(book.employee_age);

  })
}

onFormSubmit()
{
  this.datasaved=true;
  let book = this.bookForm.value;
  this.createbooks(book);
  this.bookForm.reset();
}
createbooks(book: Book)
{
  if(this.bookidToUpdate==null){
this.DataService. createbook(book).subscribe(
  book=>{
    this.datasaved=true;
    this.getsoftBooks();
    this.bookidToUpdate=null;
  }
);
  }
  else{
    book.id=this.bookidToUpdate;
    this.DataService.updatebook(book).subscribe(book=>{
      this.datasaved=true;
      this.getsoftBooks();
      this.bookidToUpdate=null;
    })
  }
}


getsoftBooks()
{
  this.allbooks=this.DataService.getbooks();
}

bookDelete(bookid:any)
{
this.DataService.deletebook(bookid).subscribe(book=>{
this.getsoftBooks();
  })
}

}


