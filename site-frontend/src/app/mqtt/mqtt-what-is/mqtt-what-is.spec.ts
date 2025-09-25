import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MqttWhatIs } from './mqtt-what-is';

describe('MqttWhatIs', () => {
  let component: MqttWhatIs;
  let fixture: ComponentFixture<MqttWhatIs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MqttWhatIs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MqttWhatIs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
