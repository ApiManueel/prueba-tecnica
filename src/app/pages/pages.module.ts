import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ComponentsModule } from '../components/components.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import { GrillaConsultaComponent } from './grilla-consulta/grilla-consulta.component';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    SignInPageComponent,
    GrillaConsultaComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule,
    MatIconModule,
    MatExpansionModule
  ],
})
export class PagesModule { }
