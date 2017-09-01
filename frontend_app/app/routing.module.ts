import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';

const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/admin/admin.module#adminModule'
  },  
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
export class RoutingModule {}

