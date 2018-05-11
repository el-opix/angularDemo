import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "../../services/heroes.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  public heroes:Heroe[];

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['query']);
      this.heroes = this._heroesService.searchHeroes(params['query']);
    })
  }

  ngOnInit() {
  }

}
