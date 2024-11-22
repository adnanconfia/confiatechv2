import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDesigningComponent } from './ui-designing.component';

describe('UiDesigningComponent', () => {
  let component: UiDesigningComponent;
  let fixture: ComponentFixture<UiDesigningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiDesigningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiDesigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
