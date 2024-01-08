import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books:Book[];

  constructor() { 

    this.books = [
      new Book("Reina Roja", "Tapa blanda", "Juan Gómez Jurado", 9.95, "https://m.media-amazon.com/images/I/71RLUa5vN0L._SY522_.jpg",1111),
      new Book("La novia gitana", "Tapa blanda", "Carmen Mola", 13.50, "https://m.media-amazon.com/images/I/51K4PqT6o-L._SY445_SX342_.jpg",2222),
      new Book("Esperando el diluvio", "Tapa blanda", "Dolores Redondo", 16.95, "https://miro.medium.com/v2/resize:fit:1200/1*EBK2S-T0Ana6CqCdqS9lDA.jpeg",3333),
      new Book("La isla de Alice", "Tapa blanda","Daniel Sánchez Arévalo", 10.40, "https://m.media-amazon.com/images/I/91NjPeSW-JL._AC_UY327_FMwebp_QL65_.jpg",4444),
      new Book("Asesinato para principiantes","Tapa blanda","Holly Jackson",15.15,"https://m.media-amazon.com/images/I/51DGoD4gi+L._SY445_SX342_.jpg",5555),
      new Book("Entre los muertos","Tapa blanda","Mikel Santiago",7.59,"https://m.media-amazon.com/images/I/91RqXewjEoL._SY522_.jpg",6666),
  
    ]

  }

  getAll(): Book[]{
    return this.books;
  }

  getOne(id_libro: number):Book[] | undefined{
    return this.books.filter(book => book.id_book === id_libro);
  }

  add(newBook:Book) {
    this.books.push(newBook);
    
  }

  edit(book:Book):boolean{
    for(let i=0; i<this.books.length; i++){
      if(this.books[i].title === book.title){
        this.books[i] = {...this.books[i], ...book};
        return true;
      }
    }
    return false;
  }

  delete(id_book: number): boolean {
    const indexToDelete = this.books.findIndex(book => book.id_book === id_book);

    if (indexToDelete !== -1) {
      this.books.splice(indexToDelete, 1);
      return true;
    }

    return false;
  }
}
