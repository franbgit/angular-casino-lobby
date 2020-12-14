import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;

    component.game = {
      id: '',
      slug: '',
      background: '',
      description: '',
      game_stakes: {},
      height: '',
      name: '',
      width: '',
      thumbnail: '',
      url: {},
      created_at: { date: '' },
      screenshot: {},
      homepage_image: {},
      vendor: '',
      vendor_name: '',
      sub_vendor: {},
      sub_vendor_name: {},
      vendor_properties: {},
      meta: {
        description_short: '',
        currency: '',
        bonus: false,
        free_spins: false,
      },
      enabled: false,
      label: '',
      cols: 0,
      rows: 0,
      pos_x: {},
      pos_y: {},
      volatility: 0,
      rating: 0,
      backgrounds: [],
      screenshots: [],
      thumbnails: { legacy: '' },
      jurisdiction: '',
      login_required: false,
      currency: '',
      min_bet: {},
      max_bet: {},
      _links: { self: { href: '' } },
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
