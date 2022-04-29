import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ServicosFormDialogComponent } from '../../servicos-form-dialog/servicos-form-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Servico } from 'src/app/shared/models/servico.model';
import { ServicosService } from 'src/app/shared/services/servicos.service';

@Component({
  selector: 'app-clinica-servicos',
  templateUrl: './clinica-servicos.component.html',
  styleUrls: ['./clinica-servicos.component.css']
})
export class ClinicaServicosComponent implements OnInit {

  public tipoLista = ['Atendimento Geral', 'Banho e Tosa', 'Castração', 'Cirurgias', 'Exames de Sangue', 'Exames de Ultrassom e Raio-X', 'Internação', 'Remoção de Tártaro', 'Vacinação'];
  public escolhidos = false;

  //@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  //@ViewChild(MatSort, { static: true }) sort: MatSort;
  //displayedColumns = ['tipo', 'clinica', 'urgencia', 'status'];
  //dataSource = new MatTableDataSource<Servico>();

  public servicos: Servico[];

  public formPesquisa = this.formBuilder.group({
    tipoServico: [ null ],
    nomeClinica: [ null ]
  });

  constructor(
    public dialog: MatDialog,
    private servicosService: ServicosService,
    public paginatorIntl: MatPaginatorIntl,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {
    //this.paginatorIntl.itemsPerPageLabel = 'Itens por página';
    //this.paginatorIntl.nextPageLabel = 'Próxima página';
    //this.paginatorIntl.previousPageLabel = 'Voltar página';
    //this.paginatorIntl.lastPageLabel = 'Última página';
    //this.paginatorIntl.firstPageLabel = 'Primeira página';
  }

  ngOnInit(): void {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
    this.carregarServicos();
  }

  public carregarServicos(): void {
    this.servicosService.buscaServicoByUser(1, 100)
      .subscribe((res: any) => {
        this.servicos = res.servicos;
        //this.dataSource.data = res.servicos as Servico[];
      }, (err) => {
        this.snackBar.open(err.error.message, 'Ok', { duration: 3000 })
        console.log(err);
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ServicosFormDialogComponent, { width: '450px' });

    dialogRef.afterClosed().subscribe(result => {
      this.carregarServicos();
    });
  }  

}