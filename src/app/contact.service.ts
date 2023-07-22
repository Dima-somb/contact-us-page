import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";


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
    })
  }
}


