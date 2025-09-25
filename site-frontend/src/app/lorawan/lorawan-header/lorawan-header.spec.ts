import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LorawanHeader } from './lorawan-header';

describe('LorawanHeader', () => {
  let component: LorawanHeader;
  let fixture: ComponentFixture<LorawanHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LorawanHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LorawanHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
