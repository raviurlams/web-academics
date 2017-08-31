import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';

const routes: Routes = [  
  { path: 'register', component: RegisterComponent },  
  { path: 'login', component: LoginComponent },  
  //{ path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },  
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
