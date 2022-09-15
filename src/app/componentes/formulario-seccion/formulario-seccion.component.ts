import { Component, EventEmitter, Output} from '@angular/core';
import { Seccion } from 'src/app/modelos/seccion';
@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent  {
  @Output() public salida = new EventEmitter();
  @Output() public salidaString = new EventEmitter<string>();
  @Output() public enviarDato= new EventEmitter<Seccion>();

  public nuevoHistorialSeccion = {
    nombreSeccion: ''

  }
  public cambiarSeccion(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorialSeccion.nombreSeccion = elemento.value;
    this.salidaString.emit(elemento.value);
  }
  public guardarHistorial(): void {
    const copia: Seccion = {
      ...this.nuevoHistorialSeccion
    }
    this.enviarDato.emit(copia);
    this.nuevoHistorialSeccion.nombreSeccion = '';

    this.salida.emit();
  }


}
