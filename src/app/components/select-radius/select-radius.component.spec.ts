import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRadiusComponent } from './select-radius.component';

describe('SelectRadiusComponent', () => {
  let component: SelectRadiusComponent;
  let fixture: ComponentFixture<SelectRadiusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectRadiusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectRadiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
