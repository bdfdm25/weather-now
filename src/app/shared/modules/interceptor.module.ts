import { NgModule, Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  private API_KEY = '9c4a76ef7746ec906d60400ac25d043a';
  private UNITS = 'metric';

  constructor(
    private spinner: NgxSpinnerService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinner.show();
    const dupReq = req.clone({
      setParams: {
        APPID: this.API_KEY,
        units: this.UNITS,
        lang: 'pt_br'
      }
    });
    return next.handle(dupReq).pipe(
      finalize(() => { this.spinner.hide(); })
    );
  }

}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    },
  ],
})
export class InterceptorModule {}
