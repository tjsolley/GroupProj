import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularCoffeeComponent } from './regular-coffee.component';

describe('RegularCoffeeComponent', () => {
  let component: RegularCoffeeComponent;
  let fixture: ComponentFixture<RegularCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularCoffeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
