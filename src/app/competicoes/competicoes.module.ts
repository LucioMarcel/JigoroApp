import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompeticoesRoutingModule } from './competicoes-routing.module';
import { CompeticoesComponent } from './competicoes.component';
import { CompeticaoFormComponent } from './competicao-form/competicao-form.component';
import { CompeticaoDetalheComponent } from './competicao-detalhe/competicao-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    CompeticoesRoutingModule
  ],
  declarations: [
    CompeticoesComponent,
    CompeticaoFormComponent,
    CompeticaoDetalheComponent
  ]
})
export class CompeticoesModule { }
