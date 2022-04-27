import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

  // decorador marca la direccion de la propedad de los datos que van desde el hijo hasta el padre. 
  // crear un evento que haga que emita la informacion y que es de tipo string
  @Output() caracteristicasEmpleados = new EventEmitter<string>();



  constructor() { }

  ngOnInit(): void {
  }

  agregaCaracteristicas(value:string){
    this.caracteristicasEmpleados.emit(value);
  }

}
