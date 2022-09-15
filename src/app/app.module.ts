import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { FormularioSeccionComponent } from './componentes/formulario-seccion/formulario-seccion.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';
import { ListaSeccionComponent } from './componentes/lista-seccion/lista-seccion.component';
import { SeccionComponent } from './componentes/seccion/seccion.component';
import { ListaHistorialComponent } from './componentes/lista-historial/lista-historial.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    FormularioAlumnoComponent,
    FormularioSeccionComponent,
    HistorialComponent,
    ListaAlumnosComponent,
    ListaSeccionComponent,
    SeccionComponent,
    ListaHistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
