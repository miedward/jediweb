import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ActivatedRoute
  ],
  exports: [
    HeroDetailModule
  ]
})
export class HeroDetailModule { }
