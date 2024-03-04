import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStudentsComponent } from './page-students.component';

describe('PageStudentsComponent', () => {
  let component: PageStudentsComponent;
  let fixture: ComponentFixture<PageStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
