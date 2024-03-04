import { TestBed } from '@angular/core/testing';

import { StudentServiceTsService } from './student-service.ts.service';

describe('StudentServiceTsService', () => {
  let service: StudentServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
