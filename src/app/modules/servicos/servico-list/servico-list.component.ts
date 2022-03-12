import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-list',
  templateUrl: './servico-list.component.html',
  styleUrls: ['./servico-list.component.css']
})
export class ServicoListComponent implements OnInit {

  public vetService: boolean;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('Login') === 'Vet') {
      this.vetService = true
    } else {
      this.vetService = false;
    }
  }

}
