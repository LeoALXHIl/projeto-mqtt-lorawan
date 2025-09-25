import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MqttAlerta } from './mqtt-alerta';

describe('MqttAlerta', () => {
  let component: MqttAlerta;
  let fixture: ComponentFixture<MqttAlerta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MqttAlerta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MqttAlerta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
