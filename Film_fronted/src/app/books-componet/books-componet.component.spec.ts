import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksComponetComponent } from './books-componet.component';

describe('BooksComponetComponent', () => {
  let component: BooksComponetComponent;
  let fixture: ComponentFixture<BooksComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksComponetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
