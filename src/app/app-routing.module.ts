import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// imports LOGIN
import { LoginComponent } from './components/login/login.component';

// imports Administracion
import { AdministracionComponent } from './components/administracion/administracion.component';
//  Administracion children imports
import { SociedadesComponent } from './components/administracion/sociedades/sociedades.component';
import { OficinasComponent } from './components/administracion/oficinas/oficinas.component';
import { EmpleadosComponent } from './components/administracion/empleados/empleados.component';
import { CardsComponent } from './components/administracion/cards/cards.component';
import { ClientesComponent } from './components/administracion/clientes/clientes.component';
import { DemoComponent } from './components/administracion/demo/demo.component';
import { AuthGuardService } from './services/auth-guard.service';
import { Rol } from './model/rol';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'administracion',
    component: AdministracionComponent,
    canActivate: [AuthGuardService],
    data: { roles: [Rol.Empleado] },
    children: [
      {
        path: '',
        component: CardsComponent
      },
      {
        path: 'empleados',
        component: EmpleadosComponent
      },
      {
        path: 'sociedades',
        component: SociedadesComponent
      },
      {
        path: 'oficinas',
        component: OficinasComponent
      },
      {
        path: 'clientes',
        component: ClientesComponent
      },
      {
        path: 'calendar',
        component: DemoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
