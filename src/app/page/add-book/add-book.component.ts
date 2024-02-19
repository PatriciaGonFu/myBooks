import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  constructor(public booksService: BooksService, private userService: UserService, private router: Router) {}

  nuevoBook(title: string, type: string, author: string, price: number, photo: string): void {
    const userId = this.userService.user.id_user;
    if (!isNaN(userId)) { // Verifica si userId es un número válido
      const libroNuevo = new Book(title, type, author, price, photo, 0, userId);
      console.log(libroNuevo);

      this.booksService.add(libroNuevo).subscribe(() => {
        console.log('Libro añadido');
        alert('Libro añadido con éxito');
        this.router.navigate(['/books']);
      });
    } else {
      console.error('Error: UserId no es un número válido');
    }
  }
}

