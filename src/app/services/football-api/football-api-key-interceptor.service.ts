import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballApiKeyInterceptor implements HttpInterceptor {

  constructor(
    @Inject('FOOTBALL_API_KEY') private apiKey: string,
    @Inject('FOOTBALL_API_BASE_URL') private baseUrl: string
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith(this.baseUrl)) {
      const reqClone = req.clone({
        headers: req.headers.set('x-apisports-key', this.apiKey)
      });
      return next.handle(reqClone);
    }
    return next.handle(req);
  }
}
