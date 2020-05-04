import { NgModule, Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  private API_KEY = '9c4a76ef7746ec906d60400ac25d043a';
  private UNITS = 'metric';

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const dupReq = req.clone({
      setParams: {
        APPID: this.API_KEY,
        units: this.UNITS
      }
    });
    return next.handle(dupReq);
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
