import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { JudocasComponent } from './judocas.component';
import { JudocaDetalheComponent } from './judoca-detalhe/judoca-detalhe.component';
import { JudocaNaoEncontradoComponent } from './judoca-nao-encontrado/judoca-nao-encontrado.component';

const cursosRoutes: Routes = [
    { path: 'judocas', component: JudocasComponent, pathMatch: 'full' },
    { path: 'judoca/:id', component: JudocaDetalheComponent, pathMatch: 'full' },
    { path: 'judocaNaoEncontrado', component: JudocaNaoEncontradoComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class JudocasRoutingModule { }
