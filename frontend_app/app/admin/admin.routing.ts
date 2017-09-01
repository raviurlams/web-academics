import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { adminComponent } from './admin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
    path: '',
    component: adminComponent,    
    children: [
        { path: '', component: LoginComponent },
        { path: 'Login', component: LoginComponent },
        { path: 'Register', component: RegisterComponent }        
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class adminRoutingModule {}
