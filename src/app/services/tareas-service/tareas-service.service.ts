import { Injectable } from '@angular/core';
import { Tareas } from '../../interface/tareas-usuario';
@Injectable({
  providedIn: 'root'
})
export class TareasServiceService {

  tareas:Tareas[]=[
  {
    id:1,
    nombre:'Cocinar',
    descripcion:'Preparar la receta de una pizza',
    estado:'Pendiente'
  },
  {
    id:2,
    nombre:'Cocinar',
    descripcion:'Preparar la receta de una pizza',
    estado:'Pendiente'
  },
  {
    id:3,
    nombre:'Cocinar',
    descripcion:'Preparar la receta de una pizza',
    estado:'Pendiente'
  },
   

  ];

  constructor() { }
}
