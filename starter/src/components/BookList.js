import CurrentlyReading from "./CurrentlyReading";
import Read from "./Read";
import WantToRead from "./WantToRead";
import { Link } from "react-router-dom";

const BookList = ({ books, handleUpdateBook }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentlyReading books={books} onUpdateBook={handleUpdateBook} />
          <WantToRead books={books} onUpdateBook={handleUpdateBook} />
          <Read books={books} onUpdateBook={handleUpdateBook} />
        </div>
      </div>

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default BookList;
