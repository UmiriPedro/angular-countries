import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor( private countriesService: CountriesService ) {}

  ngOnInit(): void {
    // Cuando inicia
    // cargo countries con la información que tengo en cache
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    // cargo el initialValue con el termSearch que tengo en cache
    this.initialValue = this.countriesService.cacheStore.byCapital.termSearch;
  }

  searchByCapital( value: string ): void {
    this.isLoading = true;

    this.countriesService.searchCapital( value )
      .subscribe( countries => {
        this.countries = countries
        this.isLoading = false;
      }
    );
  }
}
