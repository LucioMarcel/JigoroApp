import { Atleta } from "./atleta";

export class Judoca extends Atleta {
    faixa: string;

    constructor(id, nome, idade, faixa){
        super(id, nome, idade);
        this.faixa = faixa;
    }
}
