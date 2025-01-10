import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PiercingsPage } from './piercings.page';

describe('PiercingsPage', () => {
  let component: PiercingsPage;
  let fixture: ComponentFixture<PiercingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PiercingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
