import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Book } from '../Model/book';
import { MatIcon } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import Swal from 'sweetalert2';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { BookApiService } from '../Services/book-api.service';
@Component({
  selector: 'app-books-componet',
  standalone: true,
  imports: [NavBarComponent,
    MatTableModule,MatIcon,MatCardModule,MatButtonModule,CommonModule,MatFormFieldModule, MatInputModule, FormsModule,MatSelectModule,NavBarComponent],
  templateUrl: './books-componet.component.html',
  styleUrl: './books-componet.component.scss'
})
export class BooksComponetComponent {
  isPopUp:boolean=false;
  constructor(private bookService:BookApiService){}
selectedBook!:Book;

  displayedColumns: string[] = ['id', 'title', 'author', 'date', 'genres', 'characters', 'synopsis','actions'];
  dataSource = new MatTableDataSource<Book>([
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      date: '2022-01-01',
      genres: 'Genre 1',
      characters: 'Character 1',
      synopsis: 'Synopsis 1'
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      date: '2022-02-02',
      genres: 'Genre 2',
      characters: 'Character 2',
      synopsis: 'Synopsis 2'
    },
    // Add more books as needed
  ]);


 
    updateBook(bookToUpdate: Book) {
      this.isPopUp=true;
      this.selectedBook=bookToUpdate;
      
      }
    deleteBook(bootToDelete: Book) {
    this.bookService.deleteBook(bootToDelete.id).subscribe(
      {
        next:(response)=>{
          
        },
        error:(err)=>{

        }
      }
    )
    }
    close() {
      this.isPopUp=false;
      }
      updateFilmForm() {
        this.selectedBook
        this.bookService.updateBook(this.selectedBook).subscribe(
          {next:(resp)=>{

          },
          error:(err)=>{
            
          }
        }
        )
        }

}
