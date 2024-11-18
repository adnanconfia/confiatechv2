import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FEDevelopmentComponent } from './fe-development.component';

describe('FEDevelopmentComponent', () => {
  let component: FEDevelopmentComponent;
  let fixture: ComponentFixture<FEDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FEDevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FEDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
