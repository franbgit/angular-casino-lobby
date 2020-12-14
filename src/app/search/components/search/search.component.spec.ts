import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SearchComponent } from './search.component';
import { GraphQLModule } from 'src/app/graphql.module';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [HttpClientTestingModule, GraphQLModule],
      providers: [{ provide: 'API_URL', useValue: 'test' }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("inputText should have the value 'test'", () => {
    const test = 'test';
    component.inputText = '';
    component.setValue(test);
    fixture.detectChanges();
    expect(component.inputText).toEqual(test);
  });

  it('gamesSearched is empty', () => {
    component.gamesSearched = [{ test: 'test' }];
    component.inputText = '';
    component.search();
    fixture.detectChanges();
    expect(component.gamesSearched.length).toEqual(0);
  });

  it('gamesSearched has 2 elements', () => {
    component.gamesSearched = [];
    component.inputText = 'ABC';
    component.games = [{ name: 'abc1' }, { name: '2abc' }];
    component.search();
    fixture.detectChanges();
    expect(component.gamesSearched.length).toEqual(2);
  });
});
