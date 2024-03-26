import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  private BaseURl="http://localhost:8080/film_dbms/api/films";

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let modifiedRequest;
    if(!req.url.startsWith("http"))
    {
       modifiedRequest=req.clone({url:`${this.BaseURl}/${req.url}`})
    }else
    {
       modifiedRequest=req.clone({url:`${req.url}`})
    }
   

    return next.handle(modifiedRequest);
  }
}
