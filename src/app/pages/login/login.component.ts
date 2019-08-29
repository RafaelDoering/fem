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
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((res) => {
      this.router.navigateByUrl('/equipment/list');
    });
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
}
