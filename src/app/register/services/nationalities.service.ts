import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/register.interface';

@Injectable({
  providedIn: 'root'
})
export class NationalitiesService {

  private _baseUrl = 'https://restcountries.com/v2';
  
  constructor(private http: HttpClient) { }

  getCountries() : Observable<Pais[]> {
    const url: string = `${this._baseUrl}/all?fields=alpha3Code,name`;
    return this.http.get<Pais[]>(url);
  }
}
