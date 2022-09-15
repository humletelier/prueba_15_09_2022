import { Component, Input } from '@angular/core';
import { Seccion } from 'src/app/modelos/seccion';
@Component({
  selector: 'app-lista-seccion',
  templateUrl: './lista-seccion.component.html',
  styleUrls: ['./lista-seccion.component.scss']
})
export class ListaSeccionComponent  {

  @Input() public secciones!: Array<Seccion>;
}
