import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LorawanFichaTecnica } from './lorawan-ficha-tecnica';

describe('LorawanFichaTecnica', () => {
  let component: LorawanFichaTecnica;
  let fixture: ComponentFixture<LorawanFichaTecnica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LorawanFichaTecnica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LorawanFichaTecnica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
