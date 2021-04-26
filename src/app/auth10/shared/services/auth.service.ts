import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Admin} from './admin';
import {Login} from './login';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from "@angular/router";
import { ok } from 'assert';

import { Usuario } from '../../../models/usuarios';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private login = 'http://localhost:3000/api/login';    //login 
  private loginUp = 'http://localhost:3000/admin';  //registro administrador
  private loginRemenber= 'http://localhost:3000/loginRemenber';  // modificar contraseña
  private tokenVerify= 'http://localhost:3000/token';  // modificar contraseña
  dataAdmin: Admin[];
  dataLogin: Login[];
  estadoToken: boolean;

  userData:any ;
  respuesta:any;
  resToken:boolean;
  apiKey:any;
  user:any;
  usuario:any;

  
 ;

  

  constructor(
    private _http: HttpClient,
    public router: Router,
    
    ) {
      let token = this.getAccessUser();
      
    };

      
  verificaToken() {
          let data = {email:"", password:""};
          console.log("En verificaToken");
          
          return this._http
          .post(this.tokenVerify,data)
          .pipe(
                  catchError(this.handleError)
              );
        }
                    
     
      

  postRegistro(dataAdmin: Admin) {
    return this._http
                  .post(this.loginUp,dataAdmin)
                  .pipe(
                          catchError(this.handleError)
                      );
   
  }
  postLogin(dataLogin: Login) {
    return this._http
                  .post(this.login,dataLogin)
                  .pipe(
                          catchError(this.handleError)
                      );
   
  }
  postloginRemenber(dataLogin: Login) {
    return this._http
                  .post(this.loginRemenber, dataLogin)
                  .pipe(
                          catchError(this.handleError)
                      );
   
  }

  SignOut(){
    localStorage.removeItem('sfeJfsld8dsKld5lRld');
    localStorage.removeItem('user');
  }

  getAccessUser(){

    let user = localStorage.getItem('user');
    if (user){
    this.usuario =JSON.parse(user);
    this.userData = this.usuario.usuario;
      console.log("USUARIO EXISTE");
      console.log(this.userData);
      
    }else {
      console.log("USUARIO NO EXISTE");
      
    }
    
    
  }

  setUserData(user:any){
    

    this.userData = user;
  }

   


  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    console.log (err)
    console.error('Ha ocurrido un error:', err.error.err);
    alert (err.error.err.message);
    
    return throwError(err.message || err);
  }





}
