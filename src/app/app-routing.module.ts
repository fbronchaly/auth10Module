import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// Componentes auth10
import { AuthGuard } from "./auth10/shared/guard/auth.guard";
import { DashboardComponent } from './auth10/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './auth10/components/forgot-password/forgot-password.component';
import { SignInComponent } from './auth10/components/sign-in/sign-in.component';
import { SignUpComponent } from './auth10/components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './auth10/components/verify-email/verify-email.component';
import { LogOutComponent } from './auth10/components/log-out/log-out.component';



const routes: Routes = [
  

//Rutas auth10

  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'log-out', component: LogOutComponent },


  { path: '**', pathMatch: 'full', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
