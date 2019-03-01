// app.component.ts

import {Component, Input} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MessageService } from '../../core/services/message.service';

import { Hero } from '../../domain/hero';
import { HeroService } from '../../core/services/hero.service';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username = new FormControl('');
  password = new FormControl('');
  token = new FormControl('');
  @Input() hero: Hero = new Hero();

  constructor(private messageService: MessageService,
              private heroService: HeroService) {}

  login() {
    this.log('received login request.');
    this.heroService.loginHeroByName(this.username.value, this.password.value)
      .subscribe(hero =>{
        if (hero) {
          // this.token = token;
          this.log('received token for ' + this.username.value);
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
    this.messageService.add(`HeroService: ${message}`);
  }

}
