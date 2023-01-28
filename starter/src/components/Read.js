import Book from "./Book";
const Read = ({ books, onUpdateBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === "read")
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

export default Read;
