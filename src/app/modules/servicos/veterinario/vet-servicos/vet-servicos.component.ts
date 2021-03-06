import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { ServicosService } from 'src/app/shared/services/servicos.service';
import { Servico } from 'src/app/shared/models/servico.model';

@Component({
  selector: 'app-vet-servicos',
  templateUrl: './vet-servicos.component.html',
  styleUrls: ['./vet-servicos.component.css']
})
export class VetServicosComponent implements OnInit {
  tipoLista = ['Atendimento Geral', 'Banho e Tosa', 'Castração', 'Cirurgias', 'Exames de Sangue', 'Exames de Ultrassom e Raio-X', 'Internação', 'Remoção de Tártaro', 'Vacinação'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns = ['tipo', 'clinica', 'urgencia', 'action'];
  dataSource = new MatTableDataSource<Servico>();

  public servicos: Servico[];
  public userImagem: string;

  public formPesquisa = this.formBuilder.group({
    nomeClinica: [null],
    tipoServico: [null]
  });

  constructor(
    private formBuilder: FormBuilder, 
    private servicosService: ServicosService,
    private snackBar: MatSnackBar,
    public paginatorIntl: MatPaginatorIntl,
  ) {
    this.paginatorIntl.itemsPerPageLabel = 'Itens por página';
    this.paginatorIntl.nextPageLabel = 'Próxima página';
    this.paginatorIntl.previousPageLabel = 'Voltar página';
    this.paginatorIntl.lastPageLabel = 'Última página';
    this.paginatorIntl.firstPageLabel = 'Primeira página';
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.carregarServicos();
  }

  public carregarServicos(): void {
    this.servicosService.buscaServicosDisponiveis(1, 100)
      .subscribe((res: any) => {
        this.dataSource.data = res.servicos as Servico[];
        //this.servicos = res.servicos;        
      }, (err) => {
        this.snackBar.open(err.error.message, 'Ok', { duration: 3000 })
      });
  }

}