import { Injectable } from '@angular/core';

@Injectable()
export class JudocasService {

  getJudocas() {
    return [
      { id: 1, nome: 'Luca' },
      { id: 2, nome: 'Arthur' },
      { id: 3, nome: 'Ana' }
    ]
  }

  getJudoca(id: number){
    let judocas = this.getJudocas();
    for (let i=0; i < judocas.length; i++){
      let judoca = judocas[i];
      if (judoca.id == id){
        return judoca;
      }
    }
    return null;
  }

  constructor() { }

}
