import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '../../translate.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent implements OnInit {
  panelOpenState = true;
  showCards = true;
  options: FormGroup;
  // TODO: coger idioma de Basa de datos ¿asignado al usuario?
  selected = 'en';
  constructor(private router: Router, fb: FormBuilder, private translate: TranslateService, private auth: AuthService) {
    this.options = fb.group({
      floatLabel: 'auto',
      bottom: 0,
      fixed: false,
      top: 0
    });
  }
  setLang(lang: string) {
    this.translate.use(lang);
  }
  onclick() {
    this.showCards = false;
  }
  ngOnInit() {
    this.router.events.subscribe(events => {
      // Several routing events, take only the last one
      // console.log(events, events instanceof NavigationEnd, events.constructor.name, NavigationEnd.name);
      if (!(events instanceof NavigationEnd) && events.constructor.name !== NavigationEnd.name) {
        this.showCards = false;
      }
    });
    }
  getUsername() {
    return this.auth.getUser().nombre;
  }
  getUsersurname() {
    return this.auth.getUser().apellidos;
  }
  onAltPressed(event) {
    console.log(event);
  }
}
