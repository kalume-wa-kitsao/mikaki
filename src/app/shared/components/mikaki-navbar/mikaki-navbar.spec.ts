import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MikakiNavbar } from './mikaki-navbar';

describe('MikakiNavbar', () => {
  let component: MikakiNavbar;
  let fixture: ComponentFixture<MikakiNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MikakiNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MikakiNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
