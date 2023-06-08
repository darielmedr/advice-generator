import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AdviceHandlerService } from './advice-handler.service';

describe('AdviceHandlerService', () => {
  let service: AdviceHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AdviceHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
