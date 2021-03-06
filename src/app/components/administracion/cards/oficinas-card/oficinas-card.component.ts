import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInLeft, bounceInLeft, bounceInUp, bounceInRight, bounceInDown } from 'ng-animate';
import { TranslateService } from '../../../../translate.service';

@Component({
  selector: 'app-oficinas-card',
  templateUrl: './oficinas-card.component.html',
  styleUrls: ['./oficinas-card.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft))]),
    trigger('bounceInLeft', [transition('* => *', useAnimation(bounceInLeft))]),
    trigger('bounceInRight', [transition('* => *', useAnimation(bounceInRight))]),
    trigger('bounceInUp', [transition('* => *', useAnimation(bounceInUp))]),
    trigger('bounceInDown', [transition('* => *', useAnimation(bounceInDown))]),
  ]
})
export class OficinasCardComponent implements OnInit {
  bounceInUp: any;
  bounceInLeft: any;
  bounceInRight: any;
  bounceInDown: any;
  fadeInLeft: any;
  showCards = true;
  constructor(private translate: TranslateService) { }
  setLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit() {
  }
  onclick() {
    this.showCards = false;
  }
}
