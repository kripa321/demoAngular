import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-angular7';
  constructor(public router: Router) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.length) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
