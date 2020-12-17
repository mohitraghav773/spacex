import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonService } from './hero.service';

describe('CommonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [CommonService]
    });
  });

  it('should be created', () => {
    const service: CommonService = TestBed.get(CommonService);
    expect(service).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: CommonService = TestBed.get(CommonService);
    expect(service.getCards).toBeTruthy();
   });

  /*it('should be created', inject([CommonService], (service: CommonService) => {
    expect(service).toBeTruthy();
  }));*/
});
