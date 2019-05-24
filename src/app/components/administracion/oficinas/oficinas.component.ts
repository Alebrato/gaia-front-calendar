import { Component, OnInit } from '@angular/core';
import { OficinasService } from '../../../services/oficinas/oficinas.service';
import { KeyValue } from '../../../_core/key.value';
import { keyValuesOficina } from '../../../model/oficina';
import {TranslateService} from '../../../translate.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInLeft, bounceInLeft, bounceInUp, bounceInRight, bounceInDown } from 'ng-animate';

@Component({
  selector: 'app-oficinas',
  templateUrl: './oficinas.component.html',
  styleUrls: ['./oficinas.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft))]),
    trigger('bounceInLeft', [transition('* => *', useAnimation(bounceInLeft))]),
    trigger('bounceInRight', [transition('* => *', useAnimation(bounceInRight))]),
    trigger('bounceInUp', [transition('* => *', useAnimation(bounceInUp))]),
    trigger('bounceInDown', [transition('* => *', useAnimation(bounceInDown))]),
  ]
})
export class OficinasComponent implements OnInit {
  bounceInUp: any;
  bounceInLeft: any;
  bounceInRight: any;
  bounceInDown: any;
  fadeInLeft: any;
  disableCreatable = false;
  public columnasOficina: KeyValue[];

  constructor(private translate: TranslateService, public oficinasService: OficinasService ) { }
  setLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit() {
    this.columnasOficina = keyValuesOficina;
  }
}
