import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  userId: number;

  constructor(
    public booksService: BooksService,
    private userService: UserService
  ) {}

  editarLibro(title: string, type: string, author: string, price: string, photo: string, id_book: string): void {
    const userId = this.userService.user.id_user;
    if (!isNaN(userId)) { // Verifica si userId es un número válido
      const numIdBook = parseInt(id_book, 10);
      const numPrice = parseFloat(price);

      const bookEditado = new Book(title, type, author, numPrice, photo, numIdBook, userId);
      console.log(bookEditado);

      this.booksService.edit(bookEditado).subscribe((response) => {
        console.log('Libro editado', response);
      });
    } else {
      console.error('Error: UserId no es un número válido');
    }
  }
}

