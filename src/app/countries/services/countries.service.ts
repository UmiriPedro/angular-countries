import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  // Búsqueda por código de País
  searchCountryByAlphaCode( countryCode: string ): Observable<Country | null> {
    const url = `${ this.apiUrl }/alpha/${ countryCode }`;
    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length >= 0 ? countries[0] : null ), // Si hay paises devuelvo el primero, sino null
        catchError( () => of(null) )
      );
  }

  // Búsqueda por Capital
  searchCapital( value: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ value }`;
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( () => of([]) ) // Si sucede un error, captura el error y devolvé un observable vacío
      );
  }

  // Búsqueda por País
  searchCountry( value: string ): Observable<Country[]> {
   const url = `${ this.apiUrl }/name/${ value }`;
   return this.http.get<Country[]>( url )
    .pipe(
      catchError( () => of([]) )
    );
  }

  // Búsqueda por Continente
  searchRegion( region: string ): Observable<Country[]> {
   const url = `${ this.apiUrl }/region/${ region }`;
   return this.http.get<Country[]>( url )
    .pipe(
      catchError( () => of([]) )
    );
  }

}
