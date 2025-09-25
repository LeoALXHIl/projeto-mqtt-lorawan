import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LorawanAlerta } from './lorawan-alerta';

describe('LorawanAlerta', () => {
  let component: LorawanAlerta;
  let fixture: ComponentFixture<LorawanAlerta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LorawanAlerta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LorawanAlerta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
