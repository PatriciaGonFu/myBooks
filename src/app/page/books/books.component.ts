import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public myBooks: Book[];

  constructor(public bookService: BooksService){
    // this.bookService.getAll();
    this.myBooks = this.bookService.getAll();
    console.log(this.myBooks);
  }

  findBook(id_libro:string){
    console.log(id_libro);
    if(id_libro == ""){
      this.myBooks = this.bookService.getAll();
    }
    else {
      this.myBooks = this.bookService.getOne(parseInt(id_libro));
    }
  }

  eliminarLibro(id_book: number){
  let deleted = this.bookService.delete(id_book);
    if (deleted){
      this.myBooks = this.bookService.getAll();
    }
  }

  ngOnInit():void{}
}
