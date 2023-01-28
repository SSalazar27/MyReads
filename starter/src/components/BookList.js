import CurrentlyReading from "./CurrentlyReading";
import Read from "./Read";
import WantToRead from "./WantToRead";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";

const BookList = () => {
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      console.log(res);
      setBooks(res);
    };
    getBooks();
  }, []);

  const handleUpdateBook = async (id, shelf) => {
    const getBook = async () => {
      const res = await BooksAPI.get(id);
      return res;
    };
    const temp = await getBook();
    const updateBook = async () => {
      await BooksAPI.update(temp, shelf);
    };

    const index = books.findIndex((book) => book.id === id);

    books.splice(index, 1);

    updateBook();

    temp.shelf = shelf;

    setBooks([...books, temp]);
  };

  const [books, setBooks] = useState([]);

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
