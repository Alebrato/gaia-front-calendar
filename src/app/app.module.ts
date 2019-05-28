import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { TranslateService } from './translate.service';
import { TranslatePipe } from './translate.pipe';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatDialogModule, MatCardModule, MatPaginatorModule, MatSlideToggleModule } from '@angular/material';
import { MatChipsModule, MatBadgeModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LottieAnimationViewModule } from 'ng-lottie';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormContainerComponent } from './components/login/form-container/form-container.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { SociedadesService } from './services/sociedades/sociedades.service';
import { AppCrudTableComponent } from './components/commons/app-crud-table/app-crud-table.component';
import { CrudDialogComponent } from './components/commons/app-crud-table/crud-dialog/crud-dialog.component';
import { GroupFieldsComponent } from './components/commons/app-crud-table/crud-dialog/group-fields/group-fields.component';
import { SociedadesComponent } from './components/administracion/sociedades/sociedades.component';
import { OficinasComponent } from './components/administracion/oficinas/oficinas.component';
import { OficinasService } from './services/oficinas/oficinas.service';
import { EmpleadosComponent } from './components/administracion/empleados/empleados.component';
import { EmpleadosService } from './services/empleados/empleados.service';
import { CardsComponent } from './components/administracion/cards/cards.component';
import { MockOverrideService } from './mocking/mock.service.override';
import { AuthService } from './services/auth/auth.service';
import { TokenInterceptor } from './services/auth/token.interceptor';
import { ClientesComponent } from './components/administracion/clientes/clientes.component';
import { ClientesService } from './services/clientes/clientes.service';
import { EmpleadosCardComponent } from './components/administracion/cards/empleados-card/empleados-card.component';
import { OficinasCardComponent } from './components/administracion/cards/oficinas-card/oficinas-card.component';
import { SociedadesCardComponent } from './components/administracion/cards/sociedades-card/sociedades-card.component';
import { ClientesCardComponent } from './components/administracion/cards/clientes-card/clientes-card.component';
import { SecurityDirective } from './services/security.directive';
import { AuthGuardService } from './services/auth-guard.service';
import { DemoUtilsModule } from '../demo-utils/module';
import { DemoComponent } from './components/administracion/demo/demo.component';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    LoginComponent,
    FormContainerComponent,
    AdministracionComponent,
    AppCrudTableComponent,
    CrudDialogComponent,
    GroupFieldsComponent,
    SociedadesComponent,
    OficinasComponent,
    EmpleadosComponent,
    CardsComponent,
    ClientesComponent,
    EmpleadosCardComponent,
    OficinasCardComponent,
    SociedadesCardComponent,
    ClientesCardComponent,
    SecurityDirective,
    DemoComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockOverrideService, {apiBase: '/', passThruUnknownUrl: true}),
    BrowserAnimationsModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatListModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatTooltipModule,
    MatAutocompleteModule,
    LottieAnimationViewModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    DemoUtilsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    },
    EmpleadosService,
    SociedadesService,
    OficinasService,
    AuthService,
    AuthGuardService,
    ClientesService
  ],
  exports: [DemoComponent],
  bootstrap: [AppComponent],
  entryComponents: [
    CrudDialogComponent,
    GroupFieldsComponent
  ]
})
export class AppModule { }

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}
