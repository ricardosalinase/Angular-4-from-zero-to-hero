import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeroesService,Heroe } from '../../../servicios/heroes.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private _heroesService: HeroesService,
              private router:Router) {
   }
  ngOnInit() {
  }

  buscarHeroe( termino:string){
    console.log('buscarHeroe',termino)
    this.router.navigate(['/resultados/',termino]);
  }
}
