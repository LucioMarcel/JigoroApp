import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ParamMap, ActivatedRoute } from '@angular/router';

import { AtletasService } from '../atletas.service';
import { Atleta } from '../../model/atleta';


@Component({
  selector: 'app-atletas-lista',
  templateUrl: './atletas-lista.component.html',
  styleUrls: ['./atletas-lista.component.css']
})
export class AtletasListaComponent implements OnInit {

  atletas$: Observable<Atleta[]>;

  selectedID: number;

  constructor(
    private atletaService: AtletasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.atletas$ = this.route.paramMap.
    switchMap((params: ParamMap) => {
      this.selectedID = +params.get('id');
      return this.atletaService.getAtletas();
    })
  }
}
