import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";
import { useState } from "react";

const SearchPage = () => {
  const onType = (input) => {
    setQuery(input);

    if (input === "") {
      setBooks([]);
      return;
    }
    const searchBooks = async () => {
      const res = await BooksAPI.search(input, 30);
      console.log(res);
      if (res.error === undefined) {
        setBooks(res);
      } else {
        setBooks([]);
      }
    };

    searchBooks();
  };

  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => onType(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books === undefined ? (
            <></>
          ) : (
            books.map((book) => (
              <Book
                key={book.id}
                backgroundImage={book.imageLinks}
                title={book.title}
                authors={book.authors}
                shelf={book.shelf}
                id={book.id}
              />
            ))
          )}
          ;
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
