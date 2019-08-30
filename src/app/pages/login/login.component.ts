import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog'

import { AuthService } from '@services';

import { ModalErrorComponent } from './modal-error/modal-error.component';

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
      console.log(res);
      if((res as any).occupation !== 'Administradores'){
        this.authService.logout();
        this.openDialog();
      } else {
        this.router.navigateByUrl('/equipment/list');
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalErrorComponent, {
      width: '320px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  // Você não tem permissão para acessar

  constructor(
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) { }
}
