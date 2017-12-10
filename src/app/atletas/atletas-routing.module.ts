import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtletasComponent } from './atletas.component';
import { AtletasListaComponent } from './atletas-lista/atletas-lista.component';
import { AtletasDetalheComponent } from './atletas-detalhe/atletas-detalhe.component';

const atletasRoutes: Routes = [
  {
    path: "atletas",
    component: AtletasComponent,
    children: [
      {
        path: ":id",
        component: AtletasDetalheComponent
      },
      {
        path: "",
        component: AtletasListaComponent,
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(atletasRoutes)],
  exports: [RouterModule]
})
export class AtletasRoutingModule { }
