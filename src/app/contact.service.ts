import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, finalize, map, Observable, tap, throwError} from "rxjs";
import {logMessages} from "@angular-devkit/build-angular/src/tools/esbuild/utils";


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  postMessage(data: any):Observable<void> {
   return  this.http.post<void>('https://formsubmit.co/ajax/nata474747@gmail.com', data, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log('caught mapping error and rethrowing',err)
        return throwError(err)
      }),
     finalize(() => console.log('finalize'))
   )
  }
}


