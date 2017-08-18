import { Component, OnInit } from '@angular/core';
import {HeroesService,Heroe} from '../../servicios/heroes.service';
import {ActivatedRoute,Router} from '@angular/router';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: []
})
export class ResultadosComponent implements OnInit {

  heroesRes:Heroe[] = [];
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
            private router: Router) { 
  }
   ngOnInit() {
   this.activatedRoute.params.subscribe( params => {
      this.heroesRes = this._heroesService.buscarHeroes(params['termino']);
     })
  }

  verHeroe( idx:number){
    console.log(idx);
    this.router.navigate(['/heroe',idx]);
  }


}
