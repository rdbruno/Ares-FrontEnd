import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/shared/services/auth.service';
import { Veterinario } from 'src/app/shared/models/veterinario.model';

@Component({
  selector: 'app-vet-cadastro',
  templateUrl: './vet-cadastro.component.html',
  styleUrls: ['./vet-cadastro.component.css']
})
export class VetCadastroComponent implements OnInit {

  public infoMsg: string;
  public cadastrou = false;

  public formCadastro = this.formBuilder.group({
    nome: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    cpf: [null, [Validators.required]],
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
    const veterinario: Veterinario = new Veterinario(
      this.formCadastro.value.nome,
      this.formCadastro.value.email,
      this.formCadastro.value.cpf,
      this.formCadastro.value.rua,
      this.formCadastro.value.bairro,
      this.formCadastro.value.numero,
      this.formCadastro.value.cep,
      '',
      this.formCadastro.value.telefone,
      '',
      this.formCadastro.value.senha
    );

    this.authService.cadastrarVeterinario(veterinario)
      .subscribe((res) => {
        console.log(res);
        this.cadastrou = true;
        this.infoMsg = 'Veterinário Cadastrado com Sucesso!';
      },  
      (err) => {
        console.log(err);
        this.cadastrou = false;
        this.infoMsg = 'Erro ao Cadastrar';
      });
  }

}
