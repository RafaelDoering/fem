import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '@services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public onSubmit() {
    this.authService.login().subscribe((res) => {
      console.log(res);
    });

    this.router.navigateByUrl('/');
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
}
