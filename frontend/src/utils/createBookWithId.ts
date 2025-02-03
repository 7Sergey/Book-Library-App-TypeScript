// utils/createBookWithId.ts
import { v4 as uuidv4 } from 'uuid';
import { BookWithId, BookSource, Book } from '../types/types';

const createBookWithId = (book: Book, source: BookSource): BookWithId => {
  return {
    ...book,
    _id: uuidv4(), // Генерация _id
    id: uuidv4(), // Генерация id
    source: source, // Добавляем source
    isFavorite: false,
    year: book.year || 'Неизвестен', // Значение по умолчанию для года
  };
};

export default createBookWithId;
