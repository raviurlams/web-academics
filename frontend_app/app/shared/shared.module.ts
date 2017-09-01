import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule, DecimalPipe, CurrencyPipe } from '@angular/common';

import { ToastComponent } from './toast/toast.component';
import { LoadingComponent } from './loading/loading.component';

import {MdButtonModule, MdCheckboxModule,MdInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdInputModule 
  ],
  exports: [
    // Shared Components
    ToastComponent,
    LoadingComponent,
    MdButtonModule, 
    MdCheckboxModule,
    MdInputModule,
    DecimalPipe,
    CurrencyPipe
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    ToastComponent,
    LoadingComponent
  ],
  providers: [
    ToastComponent
  ]
})
export class SharedModule { }
