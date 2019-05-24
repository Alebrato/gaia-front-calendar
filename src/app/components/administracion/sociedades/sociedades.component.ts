import { Component, OnInit } from '@angular/core';
import { SociedadesService } from '../../../services/sociedades/sociedades.service';
import { KeyValue } from '../../../_core/key.value';
import { keyValuesSociedad, groupsSociedad } from '../../../model/sociedad';
import { GroupColumn } from '../../../_core/group.column';
import { TranslateService } from '../../../translate.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInLeft, bounceInLeft, bounceInUp, bounceInRight, bounceInDown } from 'ng-animate';


@Component({
  selector: 'app-sociedades',
  templateUrl: './sociedades.component.html',
  styleUrls: ['./sociedades.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft))]),
    trigger('bounceInLeft', [transition('* => *', useAnimation(bounceInLeft))]),
    trigger('bounceInRight', [transition('* => *', useAnimation(bounceInRight))]),
    trigger('bounceInUp', [transition('* => *', useAnimation(bounceInUp))]),
    trigger('bounceInDown', [transition('* => *', useAnimation(bounceInDown))]),
  ]
})
export class SociedadesComponent implements OnInit {
  bounceInUp: any;
  bounceInLeft: any;
  bounceInRight: any;
  bounceInDown: any;
  fadeInLeft: any;
  disableCreatable = false;
  public columnasSociedad: KeyValue[];
  public groupsSociedad: GroupColumn[];

  constructor(private translate: TranslateService, public sociedadesService: SociedadesService ) { }
  setLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit() {
    this.columnasSociedad = keyValuesSociedad;
    this.groupsSociedad = groupsSociedad;
  }
}
