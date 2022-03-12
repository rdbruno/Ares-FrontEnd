import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {

  public vet = true;
  public clinica = false;
  public vetColor = 'primary';
  public cliColor = 'basic';

  constructor() { }

  ngOnInit(): void {
  }

  public chooseVet(): void {
    this.vetColor = 'primary';
    this.cliColor = 'basic';

    this.vet = true;
    this.clinica = false;
  }

  public chooseClinica(): void {
    this.vetColor = 'basic';
    this.cliColor = 'primary';

    this.vet = false;
    this.clinica = true;
  }

}
