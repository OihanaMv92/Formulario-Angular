import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})


export class EmpleadoHijoCComponent implements OnInit {

  //Importar el componente input y tenemos que meter el nombre significativo que hemos dado al padre.
  // recibe 1 dato que esta identificado con empleadoDeLista y es de tipo Empleado.
@Input() empleadoDeLista:Empleado;
@Input() indice:number;

//Inmyectar el servicio
  constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }
  arrayCaracteristicas=[''];
  agregarCaracteristica(nuevaCaracteristica:string){
  this.miServicio.muestraMensaje(nuevaCaracteristica);
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
}
