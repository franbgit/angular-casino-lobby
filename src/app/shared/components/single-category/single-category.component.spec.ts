import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoryComponent } from './single-category.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SingleCategoryComponent', () => {
  let component: SingleCategoryComponent;
  let fixture: ComponentFixture<SingleCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleCategoryComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryComponent);
    component = fixture.componentInstance;
    component.games = [];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
