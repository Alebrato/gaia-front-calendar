import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { EmpleadosService } from '../../../services/empleados/empleados.service';
import { KeyValue } from '../../../_core/key.value';
import { keyValuesEmpleado } from '../../../model/empleado';
import { TranslateService } from '../../../translate.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInLeft, bounceInLeft, bounceInUp, bounceInRight, bounceInDown } from 'ng-animate';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft))]),
    trigger('bounceInLeft', [transition('* => *', useAnimation(bounceInLeft))]),
    trigger('bounceInRight', [transition('* => *', useAnimation(bounceInRight))]),
    trigger('bounceInUp', [transition('* => *', useAnimation(bounceInUp))]),
    trigger('bounceInDown', [transition('* => *', useAnimation(bounceInDown))]),
  ]
})
export class EmpleadosComponent implements OnInit {
  bounceInUp: any;
  bounceInLeft: any;
  bounceInRight: any;
  bounceInDown: any;
  fadeInLeft: any;
  disableCreatable = false;
  showCards = false;
  public columnasDireccion: KeyValue[];

  onclick() {
    this.showCards = true;
  }
  constructor(private translate: TranslateService, public direccionesService: EmpleadosService) { }
  setLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit() {
    this.columnasDireccion = keyValuesEmpleado;
  }
}

