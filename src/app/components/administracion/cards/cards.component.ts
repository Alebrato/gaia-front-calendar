import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../../translate.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInLeft, bounceInLeft, bounceInUp, bounceInRight, bounceInDown } from 'ng-animate';
import { AuthService } from '../../../services/auth/auth.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft))]),
    trigger('bounceInLeft', [transition('* => *', useAnimation(bounceInLeft))]),
    trigger('bounceInRight', [transition('* => *', useAnimation(bounceInRight))]),
    trigger('bounceInUp', [transition('* => *', useAnimation(bounceInUp))]),
    trigger('bounceInDown', [transition('* => *', useAnimation(bounceInDown))]),
  ]
})
export class CardsComponent implements OnInit {
  bounceInUp: any;
  bounceInLeft: any;
  bounceInRight: any;
  bounceInDown: any;
  fadeInLeft: any;
  showCards = true;
  elevation: any;
  constructor(private translate: TranslateService, private auth: AuthService) { }
  setLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit() {
  }
  onclick() {
    this.showCards = false;
  }
  function() {
    (this.elevation).animate ({
      marginTop: '-=1%',
    }, 200);
  }
}
