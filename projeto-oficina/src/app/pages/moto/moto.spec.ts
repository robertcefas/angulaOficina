import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moto } from './moto';

describe('Moto', () => {
  let component: Moto;
  let fixture: ComponentFixture<Moto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moto],
    }).compileComponents();

    fixture = TestBed.createComponent(Moto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
