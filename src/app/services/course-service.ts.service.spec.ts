import { TestBed } from '@angular/core/testing';

import { CourseServiceTsService } from './course-service.ts.service';

describe('CourseServiceTsService', () => {
  let service: CourseServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
