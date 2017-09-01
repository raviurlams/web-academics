import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DecimalPipe, CurrencyPipe } from '@angular/common';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module';
import { adminRoutingModule } from './admin.routing';
import { adminService } from './admin.service';
import { adminComponent } from './admin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        adminRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule    
    ],
    exports: [    
    DecimalPipe,
    CurrencyPipe
  ],
    providers: [adminService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        adminComponent,RegisterComponent, LoginComponent
    ]
})
export class adminModule {}
