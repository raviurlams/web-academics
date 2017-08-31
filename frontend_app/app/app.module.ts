import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SocialLoginModule } from "angular4-social-login";
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("924524843623-gl54cfj02m56032qctvhthkvnbdp1s66.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("115409815753405")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    RoutingModule,
    SharedModule
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,   
    UserService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
