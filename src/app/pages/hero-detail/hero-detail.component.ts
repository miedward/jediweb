import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../domain/hero';

import {ActivatedRoute, NavigationEnd, UrlSegment} from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../../core/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
    this.route.url.subscribe((s: UrlSegment[]) => {
      // Update data if the url changes (due to the search bar, primarily)
      this.getHero();
    });
  }
  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
     this.heroService.updateHero(this.hero)
       .subscribe(() => this.goBack());
   }

  goBack(): void {
    this.location.back();
  }

}
