import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    SignInPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
})
export class PagesModule { }
