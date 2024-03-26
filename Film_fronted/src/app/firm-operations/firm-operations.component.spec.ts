import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmOperationsComponent } from './firm-operations.component';

describe('FirmOperationsComponent', () => {
  let component: FirmOperationsComponent;
  let fixture: ComponentFixture<FirmOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirmOperationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirmOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
