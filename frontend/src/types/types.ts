// types.ts
export interface Book {
  _id: string; // Убедитесь, что используете id вместо _id

  id: string; // Убедитесь, что используете id вместо _id
  title: string;
  author: string;
  isFavorite: boolean;
  year?: string;
  source?: string; // Добавлено для совместимости с компонентом
}

export interface BookWithId extends Book {
  source: BookSource;
}

export type BookSource = 'manual' | 'api';
