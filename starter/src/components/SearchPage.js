import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";
import { useState } from "react";

const SearchPage = ({ handleUpdateBook, books }) => {
  const onType = (input) => {
    setQuery(input);

    if (input === "") {
      setQueryBooks([]);
      return;
    }

    const combineBooks = (searchResults) => {
      books.forEach((book) => {
        searchResults.forEach(
          (queryBook) =>
            book.id === queryBook.id && (queryBook.shelf = book.shelf)
        );
      });

      return searchResults;
    };

    const searchBooks = async () => {
      const res = await BooksAPI.search(input);
      console.log(res);
      if (res.error === undefined) {
        setQueryBooks(combineBooks(res));
      } else {
        setQueryBooks([]);
      }
    };

    searchBooks();
  };

  const [queryBooks, setQueryBooks] = useState([]);
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
            queryBooks.map((book) => (
              <Book
                key={book.id}
                backgroundImage={book.imageLinks}
                title={book.title}
                authors={book.authors}
                shelf={book.shelf}
                onUpdateBook={handleUpdateBook}
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
