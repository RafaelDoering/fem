import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fast-emag';

  constructor(
    public router: Router,
    private authService: AuthService
  ) {
    this.authService.initializeApp();
  }
}
