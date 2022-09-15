import { Component,Input  } from '@angular/core';
import { Historial } from 'src/app/modelos/historial';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent  {
  @Input() public historial!: Historial;

}
