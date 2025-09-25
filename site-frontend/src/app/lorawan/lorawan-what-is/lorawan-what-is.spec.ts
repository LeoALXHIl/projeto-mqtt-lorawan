import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LorawanWhatIs } from './lorawan-what-is';

describe('LorawanWhatIs', () => {
  let component: LorawanWhatIs;
  let fixture: ComponentFixture<LorawanWhatIs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LorawanWhatIs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LorawanWhatIs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
