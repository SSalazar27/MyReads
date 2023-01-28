const Book = ({ backgroundImage, title, authors, shelf, onUpdateBook, id }) => {
  if (authors === undefined) {
    authors = [];
  }
  if (backgroundImage === undefined) {
    backgroundImage = "";
  }
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${backgroundImage.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              defaultValue={shelf !== undefined ? shelf : "none"}
              onChange={(event) => onUpdateBook(id, event.target.value)}
            >
              <option value="disabled" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(", ")}</div>
      </div>
    </li>
  );
};

export default Book;
