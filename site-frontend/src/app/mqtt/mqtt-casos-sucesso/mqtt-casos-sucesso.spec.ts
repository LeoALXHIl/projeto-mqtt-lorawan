import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MqttCasosSucesso } from './mqtt-casos-sucesso';

describe('MqttCasosSucesso', () => {
  let component: MqttCasosSucesso;
  let fixture: ComponentFixture<MqttCasosSucesso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MqttCasosSucesso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MqttCasosSucesso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
