import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AtletasRoutingModule } from './atletas-routing.module';
import { AtletasComponent } from './atletas.component';
import { AtletasListaComponent } from './atletas-lista/atletas-lista.component';
import { AtletasDetalheComponent } from './atletas-detalhe/atletas-detalhe.component';
import { AtletasService } from './atletas.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AtletasRoutingModule
  ],
  declarations: [
    AtletasComponent,
    AtletasListaComponent,
    AtletasDetalheComponent
  ],
  providers: [
    AtletasService
  ]
})
export class AtletasModule { }
