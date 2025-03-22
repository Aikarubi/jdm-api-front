import { TestBed } from '@angular/core/testing';

import { JdmServiceService } from './jdm-service.service';

describe('JdmServiceService', () => {
  let service: JdmServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JdmServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
