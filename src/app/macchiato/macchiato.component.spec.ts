import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacchiatoComponent } from './macchiato.component';

describe('MacchiatoComponent', () => {
  let component: MacchiatoComponent;
  let fixture: ComponentFixture<MacchiatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacchiatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacchiatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
