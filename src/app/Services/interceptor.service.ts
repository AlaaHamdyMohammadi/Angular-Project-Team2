import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req)
    const token = localStorage.getItem('token'); // Change this based on your storage method

    // If a token is available, add it to the request headers
    if (token) {
      const headers = req.headers.set('Authorization', `Bearer ${token}`);
      const authReq = req.clone({ headers });
      return next.handle(authReq);
    }
    // Pass the modified request to the next handler
    return next.handle(req);
  }
}
