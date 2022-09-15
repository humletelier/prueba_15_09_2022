import { Component } from '@angular/core';
import { Alumno } from './modelos/alumno';
import { Seccion } from './modelos/seccion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba_1';

  public elementosGuardados: Array<Alumno> = [];
  public escuchandoAlHijo(){
    console.log('Hola desde el padre!!');
  }
  public escuchandoDetalle(hijo: string){
    console.log('El padre dice',hijo);
  }
  public agregarNuevo(nuevo: Alumno): void {
    const id: number = this.elementosGuardados.length + 1;
    nuevo.id = id;
    this.elementosGuardados.push(nuevo);
  }
  public borrarElemento(pos: number): void {
    this.elementosGuardados.splice(pos,1);
    console.log('La pos es', pos);
  }

  public escuchandoAlHijoSeccion(){
    console.log('Hola desde el padre!!');
  }
  public escuchandoDetalleSeccion(hijo: string){
    console.log('El padre dice',hijo);
  }
  public agregarNuevoSeccion(nuevo: Seccion): void {
    const id: number = this.elementosGuardadosSeccion.length + 1;
    nuevo.id = id;
    this.elementosGuardadosSeccion.push(nuevo);
  }
  public borrarElementoSeccion(pos: number): void {
    this.elementosGuardadosSeccion.splice(pos,1);
    console.log('La pos es', pos);
  }

  public elementosGuardadosSeccion: Array<Seccion> = [];


  public dateObj: number = Date.now();


}

