import { Component, input, output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css',
})
export class BookCard {
  bookCard = input.required<Book>();
  info = output<number>();

  infoToDad() {
    this.info.emit(this.bookCard().id);
  }
}
