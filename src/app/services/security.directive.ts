import { Directive, ElementRef, OnInit , Input } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Directive({
    selector: '[appSecurity]'
})

export class SecurityDirective implements OnInit {
    @Input('appSecurity') permission: Array<string>; // Required permission passed in
    constructor(private el: ElementRef, private authService: AuthService) { }
    ngOnInit() {
        if (!this.authService.hasPermission(this.permission)) {
              this.el.nativeElement.style.display = 'none';
        }
    }
}
