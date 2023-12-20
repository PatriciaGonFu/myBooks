import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() bookPadre: Book;
@Input() evenPadre: boolean;
@Output() eliminarLibroEvent = new EventEmitter<Book>();

eliminarLibro(){
  this.eliminarLibroEvent.emit(this.bookPadre);
}

constructor (){

}


ngOnInit(): void {
console.log(this.bookPadre);

}
}
