import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCompComponent } from './portfolio-comp.component';

describe('PortfolioCompComponent', () => {
  let component: PortfolioCompComponent;
  let fixture: ComponentFixture<PortfolioCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
