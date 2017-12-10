import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Atleta } from '../model/atleta';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router/src/router_state';

const ATLETAS: Atleta[] = [
  new Atleta(1, `Luca`, 10),
  new Atleta(2, `Ana`, 9),
  new Atleta(1, `Arthur`, 9)
]

@Injectable()
export class AtletasService {

  constructor() { }

  getAtletas(): Observable<Atleta[]> {
    return Observable.of(ATLETAS);
  }

  getAtleta(id: number | string) {
    return this.getAtletas()
      .map(atletas => atletas.find(atleta => atleta.id === +id));  // (+) before `id` turns the string into a number
  }
}
