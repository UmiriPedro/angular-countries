import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor( private countriesService: CountriesService ) {}

  ngOnInit(): void {
    // Cuando inicia
    // cargo countries con la información que tengo en cache
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    // cargo el initialValue con el termSearch que tengo en cache
    this.initialValue = this.countriesService.cacheStore.byCountries.termSearch;
  }

  searchByCountry( value: string ): void {
    this.isLoading = true;

    this.countriesService.searchCountry( value )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }
}
