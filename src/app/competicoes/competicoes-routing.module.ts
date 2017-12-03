import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompeticoesComponent } from './competicoes.component';
import { CompeticaoDetalheComponent } from './competicao-detalhe/competicao-detalhe.component';
import { CompeticaoFormComponent } from './competicao-form/competicao-form.component';

const competicoesRoutes: Routes = [
  {
    path: 'competicoes', component: CompeticoesComponent, children:
      [
        { path: 'novo', component: CompeticaoFormComponent},
        { path: ':id/editar', component: CompeticaoFormComponent },
        { path: ':id', component: CompeticaoDetalheComponent },
        { path: '', component: CompeticaoDetalheComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(competicoesRoutes)],
  exports: [RouterModule]
})
export class CompeticoesRoutingModule { }
