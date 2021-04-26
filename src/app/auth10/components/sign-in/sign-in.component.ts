import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormGroup,FormControl, FormArray,Validators } from "@angular/forms";
import { Router } from "@angular/router";



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  formAdmin: any;
  userData:any;
  userFinal:any;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { 
    this.formAdmin = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")
    })
  }

  ngOnInit() { 
    
  }

  

  onSubmit(dataAdmin:any){
    
    this.authService.postLogin(dataAdmin)
        .subscribe (res=>{
          console.log (res);
          if (res) {
            
            this.userData = res;
            this.userFinal = this.userData.usuario;
            console.log(this.userData.usuario);
            this.authService.setUserData(this.userFinal);
            
            localStorage.setItem('sfeJfsld8dsKld5lRld', this.userData.token);
            localStorage.setItem('user', JSON.stringify(this.userData));
            //NavbarComponent.updateUserStatus.next(true); 

            this.router.navigate(['listadoProf']);

            //JSON.parse(localStorage.getItem('sfeJfsld8dsKld5lRld'));
          } else {
            localStorage.setItem('sfeJfsld8dsKld5lRld', "null");
            //JSON.parse(localStorage.getItem('sfeJfsld8dsKld5lRld'));
          }
        });   
  }

}
