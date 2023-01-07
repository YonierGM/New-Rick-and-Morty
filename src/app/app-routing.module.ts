import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';

const routes: Routes = [

  {path: 'character', component: ListarComponent},
  {path: '', redirectTo: '/character', pathMatch: 'full'},
  {path: '**', component: ListarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
