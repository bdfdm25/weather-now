import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from './modules/interceptor.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    InterceptorModule,
    ComponentsModule
  ],
  exports: [
    ComponentsModule
  ]
})
export class SharedModule { }
