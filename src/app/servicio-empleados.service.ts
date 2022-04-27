import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }
// crear un servicio que cada vez que pulsen boton enviar en caracteristicas o en añadir empleado salga un mensaje!

  muestraMensaje(mensaje:string){
  alert(mensaje);
  }
}
