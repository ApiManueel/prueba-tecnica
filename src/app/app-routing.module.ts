import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrillaConsultaComponent } from './pages/grilla-consulta/grilla-consulta.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';


const routes: Routes = [
  { path: '', component: SignInPageComponent },
  { path: 'consult', component: GrillaConsultaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
