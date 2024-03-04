import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneStudentComponent } from './page-one-student.component';

describe('PageOneStudentComponent', () => {
  let component: PageOneStudentComponent;
  let fixture: ComponentFixture<PageOneStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageOneStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageOneStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
