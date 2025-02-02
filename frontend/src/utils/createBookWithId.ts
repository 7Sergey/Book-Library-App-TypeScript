// utils/createBookWithId.ts
import { v4 as uuidv4 } from 'uuid';
import { Book, BookWithId, BookSource } from '../types/types';

const createBookWithId = (book: Book, source: BookSource): BookWithId => {
  return {
    ...book,
    source: source,
    isFavorite: false,
    id: uuidv4(),
    year: book.year || 'Неизвестен', // Добавим значение по умолчанию для года
  };
};

export default createBookWithId;
