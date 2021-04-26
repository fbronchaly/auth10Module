import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormGroup,FormControl, FormArray,Validators } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {

  formAdmin: any;
  userData:any;

  constructor(
    public authService: AuthService,
    public router: Router, 
  ) { 
    this.formAdmin = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")
    })
  }

  ngOnInit() { }

  onSubmit(dataAdmin:any){
   
  
    this.authService.postloginRemenber(dataAdmin)
        .subscribe (res=>{
          console.log (res);
          
        });   
  }

  

}

