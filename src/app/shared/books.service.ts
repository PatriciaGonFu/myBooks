import { Injectable } from '@angular/core';

import { Book } from '../models/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url = "http://localhost:3000/books";

  private books:Book[];


  constructor(private http: HttpClient) { 

    this.books = [
      new Book("Reina Roja", "Tapa blanda", "Juan Gómez Jurado", 9.95, "https://m.media-amazon.com/images/I/71RLUa5vN0L._SY522_.jpg",1111),
      new Book("La novia gitana", "Tapa blanda", "Carmen Mola", 13.50, "https://m.media-amazon.com/images/I/51K4PqT6o-L._SY445_SX342_.jpg",2222),
      new Book("Esperando el diluvio", "Tapa blanda", "Dolores Redondo", 16.95, "https://miro.medium.com/v2/resize:fit:1200/1*EBK2S-T0Ana6CqCdqS9lDA.jpeg",3333),
      new Book("La isla de Alice", "Tapa blanda","Daniel Sánchez Arévalo", 10.40, "https://m.media-amazon.com/images/I/91NjPeSW-JL._AC_UY327_FMwebp_QL65_.jpg",4444),
      new Book("Asesinato para principiantes","Tapa blanda","Holly Jackson",15.15,"https://m.media-amazon.com/images/I/51DGoD4gi+L._SY445_SX342_.jpg",5555),
      new Book("Entre los muertos","Tapa blanda","Mikel Santiago",7.59,"https://m.media-amazon.com/images/I/91RqXewjEoL._SY522_.jpg",6666),
  
    ]

  }

  public getAll(): Observable <Book[]>{
    return this.http.get<Book[]>(this.url);
  }

  public getOne(id_libro: number):Observable <Book>{
    return this.http.get<Book>(`${this.url}/${id_libro}`);
  }

  public add(newBook:Book): Observable<Book> {
    return this.http.post <Book>(this.url, newBook);
    
  }
  public edit(book: Book): Observable<boolean> {
    return this.http.put<boolean>(`${this.url}/${book.id_book}`, book);
}

  

  public delete(id_book: number): Observable<boolean> {
    const url = `${this.url}/${id_book}`;
    return this.http.delete<boolean>(url, { body: { id_book } });
}

}