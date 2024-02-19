import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseUrl = "http://localhost:3000/books";
  private userId: number; 
  public userBooks: Book[];

  constructor(private http: HttpClient, private userService: UserService) {
    this.userId = this.userService.userId;
  }
  

  public getAll(userId): Observable<Book[]> {
    this.userId = userId;
    console.log(this.userId); // Verifica que el userId se haya obtenido correctamente

    return this.http.get<Book[]>(`${this.baseUrl}/${userId}`);
  }

  public getOne(bookId: number): Observable<Book> {
    console.log(`${this.baseUrl}/${this.userId}/${bookId}`);
    return this.http.get<Book>(`${this.baseUrl}/${this.userId}/${bookId}`);

    
  }

  public add(newBook: Book): Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}`, newBook);
  }

  public edit(book: Book): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/${book.id_book}`, book);
  }

  public delete(bookId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/${bookId}`);
  }
}
