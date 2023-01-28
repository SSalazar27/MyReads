import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import SearchPage from "./components/SearchPage";
import BookList from "./components/BookList";

function App() {
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
    <Routes>
      <Route
        path="/"
        element={<BookList books={books} handleUpdateBook={handleUpdateBook} />}
      />
      <Route
        path="/search"
        element={
          <SearchPage books={books} handleUpdateBook={handleUpdateBook} />
        }
      />
    </Routes>
  );
}

export default App;
