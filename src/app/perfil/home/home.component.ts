import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleSalvaPerfil(): void {
    localStorage.setItem('perfil', JSON.stringify({}));
    alert('Agora você já pode investir!');
  }

  handleExcluirPerfil(): void {
    localStorage.removeItem('perfil');
    alert('Seu perfil foi removido!');
  }

}
