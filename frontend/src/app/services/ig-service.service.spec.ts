import { TestBed } from '@angular/core/testing';

import { IgService } from './ig-service.service';

describe('IgService', () => {
  let service: IgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
