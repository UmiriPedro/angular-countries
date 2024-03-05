import { Country } from "./country.interface";
import { Region } from "./region.type";

export interface CacheStore {
  byCapital:    TermSearchCountries;
  byCountries:  TermSearchCountries;
  byRegion:     RegionCountries;
}

export interface TermSearchCountries {
  termSearch: string;
  countries:  Country[];
}

export interface RegionCountries {
  region:    Region;
  countries: Country[];
}
