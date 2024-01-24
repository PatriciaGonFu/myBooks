import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public myBooks: Book[];

  constructor(public bookService: BooksService){}

  ngOnInit():void{
    this.getBooks();
  }

  getBooks():void{
    this.bookService.getAll().subscribe(books => {
      this.myBooks = books;

    });
  }

  findBook(id_libro:string): void{
    if (id_libro === ""){
      this.getBooks();
    } else{
    const parseId = parseInt(id_libro);
    if(!isNaN(parseId)){
      this.bookService.getOne(parseId).subscribe(book =>{
        this.myBooks = book ? [book] : [];
      });
      }
    }
  }
  eliminarLibro(id_book: number): void {
    this.bookService.delete(id_book).subscribe(deleted => {
      if (deleted) {
        this.myBooks = this.myBooks.filter(book => book.id_book !== id_book);
        }
    });
  }
}
