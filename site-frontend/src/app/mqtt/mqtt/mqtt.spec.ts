import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mqtt } from './mqtt';

describe('Mqtt', () => {
  let component: Mqtt;
  let fixture: ComponentFixture<Mqtt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mqtt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mqtt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
