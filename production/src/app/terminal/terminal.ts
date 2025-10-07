import { Component } from '@angular/core';
import { ProductionControl } from '../production-control/production-control';

@Component({
  selector: 'app-terminal', // Nome do componente
  standalone: true, // Componente independente
  imports: [ProductionControl], // Importações necessárias, se houver (Dependências)
  templateUrl: './terminal.html', // Caminho do arquivo HTML
  styleUrl: './terminal.scss' // Caminho do arquivo SCSS
})
export class Terminal {

}
