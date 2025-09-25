import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lorawan } from './lorawan';

describe('Lorawan', () => {
  let component: Lorawan;
  let fixture: ComponentFixture<Lorawan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lorawan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lorawan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
