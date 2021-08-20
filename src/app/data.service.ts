import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs'
import {Book} from './book';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  bookUrl: any ='/api/books';

  constructor(private http : HttpClient) {}

getbookbytid(bookid:string)
{
  return this.http.get<Book>(this.bookUrl +"/"+ bookid);
}



updatebook(book:Book):Observable<number>
   {
     let httpheaders = new HttpHeaders()
     .set('Content-Type', 'application/Json');
     let options={
       headers:httpheaders
    };
     return this.http.put<number>(this.bookUrl+"/"+book.id,book,options);
   }




  createbook(book:Book):Observable<Book>
   {
     let httpheaders = new HttpHeaders()
     .set('Content-Type', 'application/Json');
     let options={
       headers:httpheaders
    };
     return this.http.post<Book>(this.bookUrl,book,options);
   }



   getbooks():Observable<Book[]>
   {
     return this.http.get<Book[]>(this.bookUrl);
   }


}
