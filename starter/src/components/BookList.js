import Shelf from "./Shelf";
import { Link } from "react-router-dom";

const BookList = ({ books, handleUpdateBook }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            title="Currently Reading"
            books={books}
            onUpdateBook={handleUpdateBook}
          />
          <Shelf
            title="Want to Read"
            books={books}
            onUpdateBook={handleUpdateBook}
          />
          <Shelf title="Read" books={books} onUpdateBook={handleUpdateBook} />
        </div>
      </div>

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default BookList;
