import { Component, ChangeDetectorRef } from '@angular/core';
import { CountryLookup } from '../country-lookup';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.css'
})
export class Map {

  countryDetails: any;

  constructor(
    private countryService: CountryLookup,
    private cdr: ChangeDetectorRef
) { }

  onCountryClick(event: MouseEvent): void {
  const target = event.target as SVGPathElement;
  const countryCode = target.id;

  if (!countryCode) {
    return;
  }

  console.log('Selected country code:', countryCode);

  this.countryService.getCountryData(countryCode).subscribe((data: any) => {
    console.log(data);

    this.countryDetails = data[1][0];

    this.cdr.detectChanges();
  });
}

}