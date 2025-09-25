import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LorawanCasosSucesso } from './lorawan-casos-sucesso';

describe('LorawanCasosSucesso', () => {
  let component: LorawanCasosSucesso;
  let fixture: ComponentFixture<LorawanCasosSucesso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LorawanCasosSucesso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LorawanCasosSucesso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
