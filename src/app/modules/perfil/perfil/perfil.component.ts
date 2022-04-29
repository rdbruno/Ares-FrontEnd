import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

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
