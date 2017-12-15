import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Atleta } from '../../model/atleta';
import { AtletasService } from '../atletas.service';

@Component({
  selector: 'app-atletas-detalhe',
  templateUrl: './atletas-detalhe.component.html',
  styleUrls: ['./atletas-detalhe.component.css']
})
export class AtletasDetalheComponent implements OnInit {

  atleta$: Observable<Atleta>;

  constructor(
    private atletaService: AtletasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.atleta$ = this.route.paramMap
      .switchMap(
         (params: ParamMap) => this.atletaService.getAtleta(params.get('id'))
      );
  }

  gotoAtleta(atleta: Atleta) {
    let atletaId = atleta ? atleta.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/atletas', { id: atletaId, foo: 'foo' }]);
  }

  add(atleta: Atleta): void{
    if (!atleta) { return; }
    this.atleta$ = this.atletaService.addAtleta(atleta);
  }
}
