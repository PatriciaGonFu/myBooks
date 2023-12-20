import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public myBooks: Book[];

  constructor()
  
  {
      this.myBooks = [
          new Book("Reina Roja", "Tapa blanda", "Juan Gómez Jurado", 9.95, "https://m.media-amazon.com/images/I/71RLUa5vN0L._SY522_.jpg"),
          new Book("La novia gitana", "Tapa blanda", "Carmen Mola", 13.50, "https://m.media-amazon.com/images/I/51K4PqT6o-L._SY445_SX342_.jpg"),
          new Book("Esperando el diluvio", "Tapa blanda", "Dolores Redondo", 16.95, "https://miro.medium.com/v2/resize:fit:1200/1*EBK2S-T0Ana6CqCdqS9lDA.jpeg"),
          new Book("La isla de Alice", "Tapa blanda","Daniel Sánchez Arévalo", 10.40, "https://m.media-amazon.com/images/I/91NjPeSW-JL._AC_UY327_FMwebp_QL65_.jpg"),
          new Book("Asesinato para principiantes","Tapa blanda","Holly Jackson",15.15,"https://m.media-amazon.com/images/I/51DGoD4gi+L._SY445_SX342_.jpg"),
          new Book("Entre los muertos","Tapa blanda","Mikel Santiago",7.59,"https://m.media-amazon.com/images/I/91RqXewjEoL._SY522_.jpg"),

      
        ]
  }
  
  cargarLibros(title: string, type: string, author: string, price: number, photo: string, id_book: number) {
    const newBook = new Book(title, type, author, price, photo, id_book);
    this.myBooks.push(newBook);
    
  }

  eliminarLibro(libro: Book){
   const index = this.myBooks.indexOf(libro);
   this.myBooks.splice(index,1);
  }
  ngOnInit():void{}
}
