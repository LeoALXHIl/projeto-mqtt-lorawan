import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MqttHeader } from './mqtt-header';

describe('MqttHeader', () => {
  let component: MqttHeader;
  let fixture: ComponentFixture<MqttHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MqttHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MqttHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
