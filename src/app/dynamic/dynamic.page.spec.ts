import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicPage } from './dynamic.page';

describe('DynamicPage', () => {
  let component: DynamicPage;
  let fixture: ComponentFixture<DynamicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
