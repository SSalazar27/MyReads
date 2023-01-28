import "./App.css";
import { Route, Routes } from "react-router-dom";

import SearchPage from "./components/SearchPage";
import BookList from "./components/BookList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
