import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public myBooks: Book[];

  constructor(public bookService: BooksService, private userService: UserService) {
    this.myBooks = [];
    this.bookService.getAll(this.userService.user.id_user).subscribe(books => {
      this.myBooks = books;
      console.log(this.myBooks);
      
    });
  }

  // ngOnInit(): void {
  //   this.getBooks();
  // }

  // getBooks(): void {
  //   const userId = this.userService.user.id_user;

  // }

  findBook(id_libro: string): void {
    if (id_libro == "") {
      this.bookService.getAll(this.userService.user.id_user).subscribe(books =>{
        this.myBooks = books;
      })
    } else {
      const parseId = parseInt(id_libro);
      if (!isNaN(parseId)) {
        const userId = this.userService.user.id_user; 
        this.bookService.getOne(parseId).subscribe(book => {
          this.myBooks = book ? [book] : [];
          console.log(this.myBooks);
          console.log([book]);
          
          
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
