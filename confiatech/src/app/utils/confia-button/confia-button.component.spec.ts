import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiaButtonComponent } from './confia-button.component';

describe('ConfiaButtonComponent', () => {
  let component: ConfiaButtonComponent;
  let fixture: ComponentFixture<ConfiaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiaButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfiaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
