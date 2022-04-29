import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {

  public vet = true;
  public clinica = false;
  public cliente = false;

  public vetColor = 'primary';
  public cliColor = 'basic';
  public clienteColor = 'basic';

  constructor() { }

  ngOnInit(): void {
  }

  public chooseVet(): void {
    this.vetColor = 'primary';
    this.cliColor = 'basic';
    this.clienteColor = 'basic';

    this.vet = true;
    this.clinica = false;
    this.cliente = false;
  }

  public chooseClinica(): void {
    this.vetColor = 'basic';
    this.cliColor = 'primary';
    this.clienteColor = 'basic';

    this.vet = false;
    this.clinica = true;
    this.cliente = false;
  }

  public chooseCliente(): void {
    this.vetColor = 'basic';
    this.cliColor = 'basic';
    this.clienteColor = 'primary';

    this.vet = false;
    this.clinica = false;
    this.cliente = true;
  }

}
