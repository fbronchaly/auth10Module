import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Usuario} from '../shared/services/usuario';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usuario: Usuario = {
    _id: "",
    email:"",
    rol:"",
    servicio:""
  };

  usuarios: any =[];

  constructor(
    public authService: AuthService,
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.usuario = {
      _id: this.rutaActiva.snapshot.params._id,
      email: this.rutaActiva.snapshot.params.email,
      rol:this.rutaActiva.snapshot.params.rol,
      servicio: this.rutaActiva.snapshot.params.servicio,
  } 
 
  this.usuarios = [
    { _id: this.usuario._id,
     email:  this.usuario.email,
    rol:  this.usuario.rol,
    servicio:  this.usuario.servicio}
    
  ];

}
}
