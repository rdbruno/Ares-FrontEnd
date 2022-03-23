import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ServicosService } from '../../../shared/services/servicos.service';


interface TipoServico {
  value: string;
  viewValue: string;
}

interface UrgenciaServico {
  value: string,
  viewValue: string;
}

interface PorteAnimal {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-servicos-form-dialog',
  templateUrl: './servicos-form-dialog.component.html',
  styleUrls: ['./servicos-form-dialog.component.css']
})
export class ServicosFormDialogComponent implements OnInit {

  public selectedServico: string;
  public selectedUrgencia: string;

  public listTipo: TipoServico[] = [
    { value: '1', viewValue: 'Atendimento Geral' },
    { value: '2', viewValue: 'Banho e Tosa' },
    { value: '3', viewValue: 'Castração' },
    { value: '4', viewValue: 'Cirurgias' },
    { value: '5', viewValue: 'Exames de Sangue' },
    { value: '6', viewValue: 'Exames de Ultrassom e Raio-X' },
    { value: '7', viewValue: 'Internação' },
    { value: '8', viewValue: 'Remoção de Tártaro' },
    { value: '9', viewValue: 'Vacinação' }
  ];  

  public listUrgencia: UrgenciaServico[] = [
    { value: '1', viewValue: 'Alta' },
    { value: '2', viewValue: 'Média' },
    { value: '3', viewValue: 'Baixa' }
  ];

  public listPorte: PorteAnimal[] = [
    { value: '1', viewValue: 'Pequeno' },
    { value: '2', viewValue: 'Médio' },
    { value: '3', viewValue: 'Grande' }
  ]; 

  public formServico = this.formBuilder.group({
    idTipoServico: [null, [ Validators.required ]],
    idUrgencia: [null, [ Validators.required ]],
    rua: [null, [ Validators.required ]],
    bairro: [null, [ Validators.required ]],
    numero: [null, [ Validators.required ]],
    cep: [null, [ Validators.required, Validators.minLength(5), Validators.maxLength(8) ]],
    descricao: [null, [ Validators.required ]]
  });

  constructor(
    public dialogRef: MatDialogRef<ServicosFormDialogComponent>,
    private formBuilder: FormBuilder,
    private servicosService: ServicosService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  cadastrar(): void {
    const obj = {
      servico: {
        idUrgencia: this.formServico.value.idUrgencia,
        idTipoServico: this.formServico.value.idTipoServico,
        descricao: this.formServico.value.descricao
      },
      endereco: {
          rua: this.formServico.value.rua,
          bairro: this.formServico.value.bairro,
          numero: this.formServico.value.numero,
          cep: this.formServico.value.cep
      }    
    }
    
    this.servicosService.cadastrarServico(obj)
      .subscribe((res) => {
        this.snackBar.open(res.message, 'Ok', {
          duration: 3000,
          horizontalPosition: 'start',
          verticalPosition: 'bottom'
        })
      }, (err) => {
        if (err.error.mensagem === 'Falha na autenticação') {
          localStorage.clear();
          this.router.navigate(['acesso']);
        } else {
          this.snackBar.open(err.error.mensagem, 'Ok', { 
            duration: 3000,
            horizontalPosition: 'start',
            verticalPosition: 'bottom'
          })
        }
      });      
  }

}