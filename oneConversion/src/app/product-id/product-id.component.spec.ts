import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIdComponent } from './product-id.component';

describe('ProductIdComponent', () => {
  let component: ProductIdComponent;
  let fixture: ComponentFixture<ProductIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
