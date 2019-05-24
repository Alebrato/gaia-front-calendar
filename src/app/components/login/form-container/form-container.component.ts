import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../../model/credentials';
import { TranslateService } from '../../../translate.service';

import { AuthService } from '../../../services/auth/auth.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { zoomInDown } from 'ng-animate';
@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
  animations: [
    trigger('zoomInDown', [transition('* => *', useAnimation(zoomInDown))])
  ]
})
export class FormContainerComponent implements OnInit {
  zoomInDown: any;
  public lottieConfig: Object;
  model: Credentials = {
    identifier: '',
    password: ''
};
loading = false;
returnUrl: string;

constructor(private translate: TranslateService,
  private authService: AuthService) {

  this.lottieConfig = {
    path: 'assets/json/anim_avertia_logo.json',
    autoplay: true,
    loop: true
  };
}

login() {
  console.log('you are logging in');
  if (this.model.identifier != null && this.model.identifier !== '' && this.model.password != null && this.model.password !== '') {
    this.authService.login(this.model);
  }
}
setLang(lang: string) {
  this.translate.use(lang);
}

  ngOnInit() {
  }

}
