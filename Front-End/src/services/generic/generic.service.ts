import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { LocalStorageService } from './../localStorage/localStorage.service';

@Injectable({
  providedIn: 'root'
})

export class GenericService {

  baseUrl = `${environment.baseUrl}/api/`;

  constructor(private http: HttpClient, private session: LocalStorageService) { }

  //---------------------------------------------------------------------------

  get(url: string, id: number): Observable<any> {

    console.log(`HttpClient-[Get]: ${this.baseUrl}${url}/${id}`);

    return this.http.get<any>(`${this.baseUrl}${url}/${id}`);

  }

  getAll(url: string): Observable<any[]> {

    console.log(`HttpClient-[Get]: ${this.baseUrl}${url}`);

    return this.http.get<any[]>(`${this.baseUrl}${url}`);

  }

  //---------------------------------------------------------------------------

  post(url: string, object: any | undefined) {

    console.log(`HttpClient-[Post]: ${this.baseUrl}${url}`);

    return this.http.post<any>(`${this.baseUrl}${url}`, object);

  }

  put(url: string, object: any | undefined) {

    console.log(`HttpClient-[Put]: ${this.baseUrl}${url}`);

    return this.http.put<any>(`${this.baseUrl}${url}`, object);

  }

  //---------------------------------------------------------------------------

  delete(url: string, id: number) {

    console.log(`HttpClient-[Delete]: ${this.baseUrl}${url}/${id}`);

    return this.http.delete<any>(`${this.baseUrl}${url}/${id}`);

  }

}