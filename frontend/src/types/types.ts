export interface Book {
  title: string;
  author: string;
  year?: string;
}

export interface BookWithId extends Book {
  id: string;
  isFavorite: boolean;
  source: BookSource;
}

export type BookSource = 'manual' | 'api';
