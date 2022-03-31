import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ServicosService } from 'src/app/shared/services/servicos.service';
import { Servico } from 'src/app/shared/models/servico.model';

@Component({
  selector: 'app-vet-servicos',
  templateUrl: './vet-servicos.component.html',
  styleUrls: ['./vet-servicos.component.css']
})
export class VetServicosComponent implements OnInit {
  tipoLista = ['Atendimento Geral', 'Banho e Tosa', 'Castração', 'Cirurgias', 'Exames de Sangue', 'Exames de Ultrassom e Raio-X', 'Internação', 'Remoção de Tártaro', 'Vacinação'];

  public servicos: Servico[];
  public userImagem: string;

  public formPesquisa = this.formBuilder.group({
    nomeClinica: [null],
    tipoServico: [null]
  });

  constructor(
    private formBuilder: FormBuilder, 
    private servicosService: ServicosService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.carregarServicos();
  }

  public carregarServicos(): void {
    this.servicosService.buscaServicosDisponiveis(1, 100)
      .subscribe((res: any) => {
        console.log(res);
        this.servicos = res.servicos;        
      }, (err) => {
        this.snackBar.open(err.error.message, 'Ok', { duration: 3000 })
      });
  }

}