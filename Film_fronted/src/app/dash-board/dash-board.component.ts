import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent {
  constructor(private router: Router) {}

  goTo(userInfo: string) {
    this.router.navigate(["/firms-crud-oparations"]);
  }
}
