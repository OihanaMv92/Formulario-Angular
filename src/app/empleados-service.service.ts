import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosServiceService {


  //array de tipo empleado.
  emplados:Empleado[]=[

    new Empleado("Marcos","Perez","Presidente",7500),
    new Empleado("Sara","Gomez","Secretaria",900),
    new Empleado("Juan","Lopez","Chofer",1200),
    new Empleado("Estela","Vazquez","Directora",1800),
    new Empleado("Patricia","Casas","Jefa sección",1900),
    
    ];
agregarEmpleadoServicio(empleado:Empleado){
  // agregar miEmpleado al array para que se muestre.
  this.emplados.push(empleado);
}
  constructor() { }
}
