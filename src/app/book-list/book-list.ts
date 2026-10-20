import { Component, signal } from '@angular/core';
import { Book } from '../../models/book';
import { BookCard } from '../book-card/book-card';

@Component({
  selector: 'app-book-list',
  imports: [BookCard],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  books = signal<Book[]>([
    {
      id: 1,
      title: 'Clean Code',
      author: 'Uncle Bob'
    },
    {
      id: 2,
      title: 'Clean Architecture',
      author: 'Uncle Bob'
    },
    {
      id: 3,
      title: 'Harry Potter',
      author: 'JK Howling'
    }
  ])

  deleteBook(event: number) {
    this.books.update(books => books.filter(book => book.id !== event));
  }
}
