
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';


 
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authReq = req;
    let token = localStorage.getItem('sfeJfsld8dsKld5lRld');
    
    if (token == null){
      token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Imdvb2dsZSI6ZmFsc2UsIl9pZCI6IjVmOWE3Mzg3NWVhZmJkN2IzNjdkNTRhYyIsImVtYWlsIjoiYW50b25pb0BnbWFpbC5jb20iLCJyb2wiOiJhZG1pbiIsInNlcnZpY2lvIjoibmVmIiwiX192IjowfSwiaWF0IjoxNjAzOTgyNzk3LCJleHAiOjE2MDM5ODUzODl9.lgHS9nbcdHJ80d-kmvE0woZWUu4hcWgRXe-BdriVI5A";
    }

     console.log("a ver token: " + token);
     // HttpHeader object immutable - copy values
     const headerSettings: {[name: string]: string | string[]; } = {};
     for (const key of req.headers.keys()) {
         headerSettings[key] = req.headers.getAll(key);
       }
       if (token) {
        headerSettings['token'] = token;
      }
      headerSettings['Content-Type'] = 'application/json';
      const newHeader = new HttpHeaders(headerSettings);

      authReq = req.clone ({
          headers:newHeader
      })
      
      
      return next.handle (authReq)
   
    }
   
  }
 

