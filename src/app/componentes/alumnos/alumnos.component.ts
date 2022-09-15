import { Component, Input } from '@angular/core';
import {Alumno} from './../../modelos/alumno';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent  {
  @Input() public alumno!: Alumno;



}
