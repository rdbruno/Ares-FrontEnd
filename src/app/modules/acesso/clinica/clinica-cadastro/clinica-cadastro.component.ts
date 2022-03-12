import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/shared/services/auth.service';
import { Clinica } from 'src/app/shared/models/clinica.model';

@Component({
  selector: 'app-clinica-cadastro',
  templateUrl: './clinica-cadastro.component.html',
  styleUrls: ['./clinica-cadastro.component.css']
})
export class ClinicaCadastroComponent implements OnInit {

  public infoMsg: string;
  public cadastrou = false;

  public formCadastro = this.formBuilder.group({
    nome: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    cnpj: [null, [Validators.required]],
    rua: [null, [Validators.required]],
    numero: [null, [Validators.required]],
    bairro: [null, [Validators.required]],
    cep: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(8)]],
    telefone: [null, [Validators.required]],
    senha: [null, [Validators.required]],
    confirmaSenha: [null, [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public cadastrar(): void {
    const clinica: Clinica = new Clinica(
      this.formCadastro.value.nome,
      this.formCadastro.value.email,
      this.formCadastro.value.cnpj,
      this.formCadastro.value.rua,
      this.formCadastro.value.bairro,
      this.formCadastro.value.numero,
      this.formCadastro.value.cep,
      '',
      this.formCadastro.value.telefone,
      '',
      this.formCadastro.value.senha
    );

    this.authService.cadastrarClinica(clinica)
      .subscribe((res) => {
        console.log(res);
        this.cadastrou = true;
        this.infoMsg = 'Clinica Cadastrada com Sucesso!';
      },
      (err) => {
        console.log(err);
        this.cadastrou = false;
        this.infoMsg = 'Erro ao Cadastrar';
      });
  }

}
