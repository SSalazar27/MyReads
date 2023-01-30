import Book from "./Book";
import { useEffect, useState } from "react";
const Shelf = ({ title, books, onUpdateBook }) => {
  const [shelfName, setShelfName] = useState("");
  useEffect(() => {
    const getShelfName = () => {
      switch (title) {
        case "Currently Reading":
          return "currentlyReading";

        case "Want to Read":
          return "wantToRead";

        case "Read":
          return "read";

        default:
          return "ERROR: INVALID SHELF NAME";
      }
    };

    setShelfName(getShelfName());
  }, [shelfName, title]);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === shelfName)
            .map((book) => (
              <Book
                key={book.id}
                backgroundImage={book.imageLinks}
                title={book.title}
                authors={book.authors}
                shelf={book.shelf}
                onUpdateBook={onUpdateBook}
                id={book.id}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
