import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSpinner } from "react-icons/fa";
import {
  addBook,
  addBookApi,
  fetchBook,
  selectIsLoadingViaAPI,
} from "../../redux/slices/booksSlice";
import "./BookForm.scss";
import createBookWithId from "../../utils/createBookWithId";
import { setError } from "../../redux/slices/errorSlice";
import { AppDispatch } from "../../redux/store";
import { BookWithId } from "../../types/types";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      dispatch(setError("Проверьте поля ввода"));
      return;
    }

    // Теперь передаем данные в createBookWithId, чтобы получить полный объект
    const book: BookWithId = createBookWithId(
      {
        title,
        author,
        year,
        id: "",
        _id: "",
        isFavorite: false,
      },
      "manual"
    );

    dispatch(
      addBookApi({ url: "https://book-library-app-api.vercel.app/books", book })
    );
    dispatch(addBook(book));

    // Очистка полей формы
    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <div className="app-block book-form">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button type="submit">Send Book to DB</button>
        <button
          type="button"
          onClick={() =>
            dispatch(
              fetchBook("https://book-library-app-api.vercel.app/books/random")
            )
          }
          disabled={isLoadingViaAPI}
        >
          {isLoadingViaAPI ? (
            <FaSpinner className="spinner" />
          ) : (
            "Add Random via API"
          )}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
