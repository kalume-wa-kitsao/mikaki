import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MikakiFooter } from './mikaki-footer';

describe('MikakiFooter', () => {
  let component: MikakiFooter;
  let fixture: ComponentFixture<MikakiFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MikakiFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MikakiFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
