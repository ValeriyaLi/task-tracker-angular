import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Options} from "../../types";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  get<T>(url: string): Observable<T>{
    return this.httpClient.get<T>(url) as Observable<T>;
  }

}
