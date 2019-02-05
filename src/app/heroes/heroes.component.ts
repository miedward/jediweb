import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  viewStart: number;
  viewInterval: number;
  viewEnd: number;
  totalHeroes: number = 0;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.viewStart = 1;
    this.viewInterval= 20;
    this.viewEnd = this.viewStart + this.viewInterval;
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => {
          this.totalHeroes = heroes.length;
          this.heroes = heroes.slice(this.viewStart, this.viewEnd);
        });
  }
  goBack(): void {
    if (this.viewStart - this.viewInterval > 0) {
     this.viewStart = this.viewStart - this.viewInterval;
     this.viewEnd = this.viewEnd - this.viewInterval;
     this.getHeroes();
    }
   }
   goForward(): void {
      this.viewStart = this.viewStart + this.viewInterval;
      this.viewEnd = this.viewEnd + this.viewInterval;
      this.getHeroes();
    }

}



/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
