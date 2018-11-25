import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';

import { Article } from 'app/hash/infrastructure/domain/Article';
import { Person } from 'app/hash/infrastructure/domain/Person';

@Injectable()
export class HashResource {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  initArticles(): Observable<any> {
   return this.httpClient.get<any>(this.baseUrl + '/articles')
              .pipe(map((response: any) => {
                return Article.fromRaws(response);
              }));
  }

  initPersons(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + '/people')
               .pipe(map((response: any) => {
                 return Person.fromRaws(response);
               }));
  }
}
