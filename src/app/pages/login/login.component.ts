// app.component.ts

import {Component, Input} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MessageService } from '../../core/services/message.service';

import { Hero } from '../../domain/hero';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username = new FormControl('');
  password = new FormControl('');
  token = new FormControl('');
  @Input() hero: Hero = new Hero();

  constructor(private messageService: MessageService,
              private authService: AuthService) {}

  public login() {
    this.log('received login request.');
    this.authService.loginHeroByName(this.username.value, this.password.value)
      .subscribe(hero => {
        if (hero) {
          // this.token = token;
          this.log('login successful for ' + this.username.value);

          this.username.setValue('');
          this.password.setValue('');
          this.hero = new Hero();
        } else {
          this.log('Login Failed.');
        }
      });
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`LoginPage: ${message}`);
  }

}
