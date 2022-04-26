import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';


  //array de tipo empleado.
emplados:Empleado[]=[

new Empleado("Marcos","Perez","Presidente",7500),
new Empleado("Sara","Gomez","Secretaria",900),
new Empleado("Juan","Lopez","Chofer",1200),
new Empleado("Estela","Vazquez","Directora",1800),
new Empleado("Patricia","Casas","Jefa sección",1900),

];

agregarEmpleado(){

  // Instanciar nuestra clase empleado y Cogemos los datos siguientes del formulario. 
  let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
  // agregar miEmpleado al array para que se muestre.
  this.emplados.push(miEmpleado);
}

// para que guarde la informacion del nombre del formulario.
cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;
}
