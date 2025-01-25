import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedSoftwareComponent } from './customized-software.component';

describe('CustomizedSoftwareComponent', () => {
  let component: CustomizedSoftwareComponent;
  let fixture: ComponentFixture<CustomizedSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizedSoftwareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomizedSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
