import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormGroup,FormControl, FormArray,Validators } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

formAdmin: any;
userData:any;

  constructor(
    public authService: AuthService,
    public router: Router, 
  ) { 
    this.formAdmin = new FormGroup({
      email: new FormControl(""),
      password: new FormControl(""),
      servicio: new FormControl(""),
      rol: new FormControl(""),

    })
  }

  ngOnInit() { }

  onSubmit(dataAdmin:any){
    console.log(dataAdmin);
    
    dataAdmin.rol = "admin";

    this.authService.postRegistro(dataAdmin)
        .subscribe (res=>{
          console.log (res);
          if (res) {
            this.userData = res;
            localStorage.setItem('sfeJfsld8dsKld5lRld', this.userData.token);
            this.router.navigate(['listadoProf']);
            //JSON.parse(localStorage.getItem('sfeJfsld8dsKld5lRld'));
          } else {
            localStorage.setItem('sfeJfsld8dsKld5lRld', "null");
            //JSON.parse(localStorage.getItem('sfeJfsld8dsKld5lRld'));
          }
        });   
  }

  
 
}
