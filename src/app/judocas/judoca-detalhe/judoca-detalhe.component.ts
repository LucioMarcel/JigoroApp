import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JudocasService } from '../judocas.service';

@Component({
  selector: 'app-judoca-detalhe',
  templateUrl: './judoca-detalhe.component.html',
  styleUrls: ['./judoca-detalhe.component.css']
})
export class JudocaDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription
  judoca: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private judocasService: JudocasService
  ) { 
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.judoca = this.judocasService.getJudoca(this.id);

        if (this.judoca == null){
          this.router.navigate(['/judocaNaoEncontrado']);
        }
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
