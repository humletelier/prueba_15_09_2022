import { Component, EventEmitter, Output, Input} from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent  {
  @Output() public salida = new EventEmitter();
  @Output() public salidaString = new EventEmitter<string>();
  @Output() public enviarDato = new EventEmitter<Alumno>();

  public nuevoHistorialAlumno: Alumno = {

    nombre: '',
    apellido: '',
    rut: '',
    edad: 0,

    }

  public cambiarNombre(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorialAlumno.nombre = elemento.value;
    this.salidaString.emit(elemento.value);
  }
  public cambiarApellido(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorialAlumno.apellido = elemento.value;
    this.salidaString.emit(elemento.value);
  }
  public cambiarRut(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorialAlumno.rut = elemento.value;
    this.salidaString.emit(elemento.value);
  }
  public cambiarEdad(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorialAlumno.edad = Number.parseInt(elemento.value);
    this.salida.emit(elemento.value);
  }

  public guardarHistorial(): void {
    const copia: Alumno = {
      ...this.nuevoHistorialAlumno
    }
    this.enviarDato.emit(copia);
    this.nuevoHistorialAlumno.nombre = '';
    this.nuevoHistorialAlumno.apellido = '';
    this.nuevoHistorialAlumno.rut = '';
    this.nuevoHistorialAlumno.edad = 0;

    this.salida.emit();
  }

}
