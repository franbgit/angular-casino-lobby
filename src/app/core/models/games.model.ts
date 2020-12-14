export interface CategoryList {
  _links: Links;
  _embedded: Embedded;
  total_items: number;
}

interface Links {
  self: Self;
}

interface Self {
  href: string;
}

interface Embedded {
  game_categories: SingleCategory[];
}

export interface SingleCategory {
  name: string;
  order: number;
  slug: string;
  _embedded: Embedded2;
  _links: Links;
}

interface Embedded2 {
  games: Game[];
}

export interface Game {
  id: string;
  slug: string;
  background: string;
  description: string;
  game_stakes: unknown;
  height: string;
  name: string;
  width: string;
  thumbnail: string;
  url: unknown;
  created_at: CreatedAt;
  screenshot: unknown;
  homepage_image: unknown;
  vendor: string;
  vendor_name: string;
  sub_vendor: unknown;
  sub_vendor_name: unknown;
  vendor_properties: unknown;
  meta: Meta;
  enabled: boolean;
  label: string;
  cols: number;
  rows: number;
  pos_x: unknown;
  pos_y: unknown;
  volatility: number;
  rating: number;
  backgrounds: Background[];
  screenshots: unknown[];
  thumbnails: Thumbnails;
  jurisdiction: string;
  login_required: boolean;
  currency: string;
  min_bet: unknown;
  max_bet: unknown;
  _links: Links;
}

interface CreatedAt {
  date: string;
}

interface Meta {
  description_short: string;
  currency: string;
  description_long?: string;
  bonus: boolean;
  free_spins: boolean;
  lines?: number;
}

interface Background {
  [key: number]: string;
}

interface Thumbnails {
  legacy: string;
}
