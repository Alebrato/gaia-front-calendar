import { Component, OnInit } from '@angular/core';
import {TranslateService} from '../../translate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private translate: TranslateService) {
  }
  setLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit() {
  }

}
