import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth.service';
import { UserLogin } from 'src/app/shared/models/user-login.model';

@Component({
  selector: 'app-clinica-login',
  templateUrl: './clinica-login.component.html',
  styleUrls: ['./clinica-login.component.css']
})
export class ClinicaLoginComponent implements OnInit {

  public errorMsg: string;

  public formLogin = this.formBuilder.group({
    documento: [null, [Validators.required]],
    senha: [null, [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
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
          localStorage.setItem('Login', 'Clinica');
          this.router.navigate(['menu']);
        } else {
          this.errorMsg = 'Usuário não encontrado!';
        }
      }, (err) => {
        console.log(err);
        this.errorMsg = err.error.message;
      })
  }

}
