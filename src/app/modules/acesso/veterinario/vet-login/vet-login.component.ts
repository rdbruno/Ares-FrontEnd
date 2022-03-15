import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from 'src/app/shared/services/auth.service';
import { UserLogin } from 'src/app/shared/models/user-login.model';

@Component({
  selector: 'app-vet-login',
  templateUrl: './vet-login.component.html',
  styleUrls: ['./vet-login.component.css']
})
export class VetLoginComponent implements OnInit {

  public formLogin = this.formBuilder.group({
    documento: [null, [Validators.required]],
    senha: [null, [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    const user: UserLogin = new UserLogin(
      this.formLogin.value.documento,
      this.formLogin.value.senha
    );

    this.authService.login(user)
      .subscribe((res) => {
        if (res.content.token) {
          localStorage.setItem('token', res.content.token);
          localStorage.setItem('UserID', res.content.user.idUsuario);
          localStorage.setItem('UserDocument', res.content.user.documento);
          localStorage.setItem('Login', 'Vet');
          this.router.navigate(['menu']);
        } else {
          this.snackBar.open('Usuário não encontrado!', 'Ok', { duration: 3000 });
        }
      }, (err) => {
        this.snackBar.open(err.error.message, 'Ok', { duration: 3000 });
      })
  }

}
