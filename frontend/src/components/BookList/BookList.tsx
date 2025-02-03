import { BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { ReactNode } from "react";

import {
  deleteBook,
  selectBooks,
  toggleFavorite,
} from "../../redux/slices/booksSlice";
import {
  selectAuthorFilter,
  selectFavoriteFilter,
  selectTitleFilter,
} from "../../redux/slices/filterSlice";
import { selectUser, UserState } from "../../redux/slices/userSlice";
import "./BookList.scss";
import { Book } from "../../types/types";

// Определение интерфейса, если его нет в booksSlice.ts

const BookList = () => {
  const dispatch = useDispatch();
  const books: Book[] = useSelector(selectBooks);
  const titleFilter: string = useSelector(selectTitleFilter);
  const authorFilter: string = useSelector(selectAuthorFilter);
  const favoriteFilter: boolean = useSelector(selectFavoriteFilter);
  const user: UserState = useSelector(selectUser) as UserState;

  const handleDelete = (id: string): void => {
    dispatch(deleteBook(id));
  };

  const handleToggle = (id: string): void => {
    dispatch(toggleFavorite(id));
  };

  const filteredBooks: Book[] = books.filter((book: Book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase());
    const matchesFavorite = favoriteFilter ? book.isFavorite : true;

    return matchesTitle && matchesAuthor && matchesFavorite;
  });

  const highlightMatch = (text: string, filter: string): ReactNode => {
    if (!filter) return text;

    const regex = new RegExp(`(${filter})`, "gi");

    return text.split(regex).map((substring, i) =>
      substring.toLowerCase() === filter.toLowerCase() ? (
        <span key={i} className="highlight">
          {substring}
        </span>
      ) : (
        substring
      )
    );
  };

  return (
    <div className="app-block book-list">
      <h2>{`Book List by ${user.name}`}</h2>
      {filteredBooks.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
            <li key={book.id || i}>
              <div className="book-info">
                {i + 1}. {highlightMatch(book.title, titleFilter)} by{" "}
                <strong>{highlightMatch(book.author, authorFilter)}</strong>{" "}
                {book.source && `(${book.source})`}
              </div>
              <div className="book-actions">
                {book.isFavorite ? (
                  <BsBookmarkCheckFill
                    onClick={() => handleToggle(book.id)}
                    className="star-icon"
                  />
                ) : (
                  <BsBookmarkCheck
                    onClick={() => handleToggle(book.id)}
                    className="star-icon"
                  />
                )}
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
