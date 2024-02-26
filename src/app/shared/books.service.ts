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
  

  public getAll(userId) {
    this.userId = userId;
    console.log(this.userId); // Verifica que el userId se haya obtenido correctamente

    return this.http.get(`${this.baseUrl}/${userId}`);
  }

  public getOne(bookId: number) {
    console.log(`${this.baseUrl}/${this.userId}/${bookId}`);
    return this.http.get(`${this.baseUrl}/${this.userId}/${bookId}`);

    
  }

  public add(newBook: Book): Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}`, newBook);
  }

  public edit(book: Book){
    console.log(book);
    
    return this.http.put(this.baseUrl, book)
  }

  public delete(bookId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/${bookId}`);
  }
}
