import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent{
  
  constructor(public BooksService:BooksService){}

  nuevoBook(title:string, type:string, author:string, price:number, photo:string, id_book:number)

  {
    let libroNuevo = new Book(title,type,author,price,photo,id_book);
    console.log(libroNuevo);
    this.BooksService.add(libroNuevo);
  }


}
