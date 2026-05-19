import { TestBed } from '@angular/core/testing';

import { CountryLookup } from './country-lookup';

describe('CountryLookup', () => {
  let service: CountryLookup;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryLookup);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
