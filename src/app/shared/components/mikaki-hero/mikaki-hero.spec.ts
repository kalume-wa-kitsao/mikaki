import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MikakiHero } from './mikaki-hero';

describe('MikakiHero', () => {
  let component: MikakiHero;
  let fixture: ComponentFixture<MikakiHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MikakiHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MikakiHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
