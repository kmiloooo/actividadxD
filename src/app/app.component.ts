import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{TareasCompenentsComponent} from '../app/components/tareas-compenents/tareas-compenents.component';
import {UsuariosComponentsComponent} from '../app/components/usuarios-components/usuarios-components.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TareasCompenentsComponent,UsuariosComponentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicioChatgpt';
}
