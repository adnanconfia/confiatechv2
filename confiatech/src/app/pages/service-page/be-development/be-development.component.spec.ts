import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeDevelopmentComponent } from './be-development.component';

describe('BeDevelopmentComponent', () => {
  let component: BeDevelopmentComponent;
  let fixture: ComponentFixture<BeDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeDevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
