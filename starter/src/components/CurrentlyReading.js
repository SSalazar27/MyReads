import Book from "./Book";
const CurrentlyReading = ({ books, onUpdateBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === "currentlyReading")
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

export default CurrentlyReading;
