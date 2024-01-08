import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  constructor(public BooksService: BooksService){}

  bookEditado(title:string, type:string,author:string,price:number,photo:string,id_book:number)
  {
    let libroEditado = new Book(title,type,author,price,photo,id_book);
    console.log(libroEditado);
    this.BooksService.edit(libroEditado);    
  }
}
