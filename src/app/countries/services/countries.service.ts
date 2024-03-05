import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { CacheStore } from '../interfaces/cache-store.interface';
import { Country } from '../interfaces/country.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital:    { termSearch: '', countries: [] },
    byCountries:  { termSearch: '', countries: [] },
    byRegion:     { region:     '', countries: [] }
  };

  constructor(private http: HttpClient) {
    console.log('CountriesService init');
    this.loadFromLocalStorage();
   }

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
  searchCapital( termSearch: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termSearch }`;
    return this.getCountriesRequest(url)
      .pipe(
        tap( countries => this.cacheStore.byCapital = { termSearch, countries }), // cargo la información en el cacheStore
        tap( () => this.saveToLocalStorage() ) // Cada vez que se hace un searchCapital, guardo en el localStorage
      );
  }

  // Búsqueda por País
  searchCountry( termSearch: string ): Observable<Country[]> {
   const url = `${ this.apiUrl }/name/${ termSearch }`;
   return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byCountries = { termSearch, countries }), // cargo la información en el cacheStore
      tap( () => this.saveToLocalStorage() ) // Cada vez que se hace un searchCountry, guardo en el localStorage
    );
  }

  // Búsqueda por Continente
  searchRegion( region: Region ): Observable<Country[]> {
   const url = `${ this.apiUrl }/region/${ region }`;
   return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byRegion = { region, countries }), // cargo la información en el cacheStore
      tap( () => this.saveToLocalStorage() ) // Cada vez que se hace un searchRegion, guardo en el localStorage
    );
  }

  private getCountriesRequest( url: string ): Observable<Country[]> {
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( () => of([]) ), // Si sucede un error, captura el error y devolvé un observable vacío
        //delay( 2000 ) // Ponemos una espera de 2 segundos
      );
  }

  // Método para grabar la información del cache en el local storage
  private saveToLocalStorage(): void {
    localStorage.setItem( 'cacheStore', JSON.stringify( this.cacheStore ));
  }

  // Método para cargar la información del local storage en el cache
  private loadFromLocalStorage(): void {
    // Si el localStorage no tiene el 'cacheStore', salgo
    if ( !localStorage.getItem('cacheStore') ) return;

    // Si el localStorage tiene el 'cacheStore', se lo asigno a la cacheStore
    this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! );
  }

}
