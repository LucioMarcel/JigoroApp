import { Component, OnInit } from '@angular/core';
import { JudocasService } from './judocas.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-judocas',
  templateUrl: './judocas.component.html',
  styleUrls: ['./judocas.component.css']
})
export class JudocasComponent implements OnInit {

  judocas: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private judocasService: JudocasService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.judocas = this.judocasService.getJudocas();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
