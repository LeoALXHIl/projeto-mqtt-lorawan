import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MqttFichaTecnica } from './mqtt-ficha-tecnica';

describe('MqttFichaTecnica', () => {
  let component: MqttFichaTecnica;
  let fixture: ComponentFixture<MqttFichaTecnica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MqttFichaTecnica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MqttFichaTecnica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
