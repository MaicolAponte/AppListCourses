import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCourseComponent } from './page-course.component';
import { ButtomsComponent } from '../components/buttoms/buttoms.component';
import { FormCourseComponent } from '../form-course/form-course.component';
import { TableCourseComponent } from '../components/table-course/table-course.component';

describe('PageCourseComponent', () => {
  let component: PageCourseComponent;
  let fixture: ComponentFixture<PageCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCourseComponent, ButtomsComponent, FormCourseComponent, TableCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
