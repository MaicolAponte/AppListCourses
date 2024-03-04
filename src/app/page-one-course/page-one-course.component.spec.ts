import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneCourseComponent } from './page-one-course.component';

describe('PageOneCourseComponent', () => {
  let component: PageOneCourseComponent;
  let fixture: ComponentFixture<PageOneCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageOneCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageOneCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
