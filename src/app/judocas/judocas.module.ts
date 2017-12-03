import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JudocasRoutingModule } from './judocas-routing.module';
import { JudocasComponent } from './judocas.component';
import { JudocaNaoEncontradoComponent } from './judoca-nao-encontrado/judoca-nao-encontrado.component';
import { JudocaDetalheComponent } from './judoca-detalhe/judoca-detalhe.component';
import { JudocasService } from './judocas.service';

@NgModule({
  imports: [
    CommonModule,
    JudocasRoutingModule
  ],
  declarations: [
    JudocasComponent,
    JudocaDetalheComponent,
    JudocaNaoEncontradoComponent
  ],
  providers: [
    JudocasService
  ]
})
export class JudocasModule { }
