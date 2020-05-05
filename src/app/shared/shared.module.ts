import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from './modules/interceptor.module';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { DateFormatPipe } from './pipes/date-format.pipe';

@NgModule({
  declarations: [
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InterceptorModule,
    ComponentsModule,
    NgxSpinnerModule
  ],
  exports: [
    ComponentsModule,
    NgxSpinnerModule,
    DateFormatPipe
  ],
  providers: [
    NgxSpinnerService
  ]
})
export class SharedModule { }
