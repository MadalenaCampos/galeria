import { TestBed } from '@angular/core/testing';

import { ApiPicsumService } from './api-picsum.service';

describe('ApiPicsumService', () => {
  let service: ApiPicsumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPicsumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
