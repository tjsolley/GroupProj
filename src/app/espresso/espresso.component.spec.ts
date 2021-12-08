import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspressoComponent } from './espresso.component';

describe('EspressoComponent', () => {
  let component: EspressoComponent;
  let fixture: ComponentFixture<EspressoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspressoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
