import { Component } from '@angular/core';

@Component({
  selector: 'app-tareas-compenents',
  standalone: true,
  imports: [],
  templateUrl: './tareas-compenents.component.html',
  styleUrl: './tareas-compenents.component.css'
})
export class TareasCompenentsComponent {
usuariosDisponibles:string[]=['camilo','pedro','messi','itadori'];
usuariosAsignados:string[]=[];

agregarUsuario(usuarios:string){
  if(!this.usuariosAsignados.includes(usuarios)){
    this.usuariosAsignados.push(usuarios)
  }

  console.log(this.usuariosAsignados)
 
}



}
