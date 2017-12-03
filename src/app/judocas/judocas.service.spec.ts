import { TestBed, inject } from '@angular/core/testing';

import { JudocasService } from './judocas.service';

describe('JudocasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JudocasService]
    });
  });

  it('should be created', inject([JudocasService], (service: JudocasService) => {
    expect(service).toBeTruthy();
  }));
});
