import { TestBed } from '@angular/core/testing';

import { AdviceHandlerService } from './advice-handler.service';

describe('AdviceHandlerService', () => {
  let service: AdviceHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdviceHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
