import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  constructor(public booksService: BooksService){}

  editarLibro(title: string, type: string, author: string, price: number, photo: string, id_book: number): void {
    const bookEditado = new Book(title, type, author, price, photo, id_book);
    console.log(bookEditado);
  
    this.booksService.edit(bookEditado).subscribe((response) => {
      console.log('Libro editado', response);
    });
  }
}
