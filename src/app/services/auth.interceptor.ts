import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(

    ) { }

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        return throwError(err);
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const cloneReq = req.clone({
            url: `https://jsonplaceholder.typicode.com/${req.url}`
        });
        return next.handle(cloneReq).pipe(
            catchError(x => this.handleAuthError(x)));
    }
}
