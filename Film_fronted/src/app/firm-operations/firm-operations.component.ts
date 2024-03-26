import { Component, OnInit } from '@angular/core';
import { Film } from '../Model/film';
import { HttpClient } from '@angular/common/http';
import { FilmAPIService } from '../Services/film-api.service';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import Swal from 'sweetalert2';
import { NavBarComponent } from '../nav-bar/nav-bar.component';


@Component({
  selector: 'app-firm-operations',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,CommonModule,MatFormFieldModule, MatInputModule, FormsModule,MatSelectModule,NavBarComponent],
  templateUrl: './firm-operations.component.html',
  styleUrl: './firm-operations.component.scss'
})
export class FirmOperationsComponent implements OnInit {


name: any;

  constructor(private http: HttpClient, private filmService: FilmAPIService) {}

  films: Film[] = [];
  selectedFilm!:Film;
  isPopUp:boolean=false;

  ngOnInit(): void {
    this.films=this.filmService.getDummyData();
        console.log(this.films)
    // this.filmService.getAllFilms().subscribe({
    //   next: (films: Film[]) => {
    //     this.films = films;
    //   },
    //   error: (err) => {
    //     console.error('Error fetching films:', err);
        
    //   }
    // });
  }

  DeleteCard(film: Film) {
    this.filmService.deleteFilm(film.id).subscribe({
      next:(res)=>{
        this.successUpdateMessage("Deleted successfully");
      },
      error:(err)=>{

      }
    })
    }

    updateFilm(film:Film) {
      this.isPopUp=true;
      this.selectedFilm=film

}
close() {
  this.isPopUp=false;
  }
  updateFilmForm()
  {
    this.filmService.updateFilm(this.selectedFilm).subscribe({
      next:(res)=>{
        this.successUpdateMessage("Updated successfully");

      },
      error:(err)=>{

      }
    })
  }
  successUpdateMessage(message:string)
  {
    Swal.fire('success', message, 'success');
  }
}
