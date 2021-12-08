import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrappuccinoComponent } from './frappuccino.component';

describe('FrappuccinoComponent', () => {
  let component: FrappuccinoComponent;
  let fixture: ComponentFixture<FrappuccinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrappuccinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrappuccinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
