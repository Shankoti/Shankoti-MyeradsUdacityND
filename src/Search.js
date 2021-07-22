import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import Book from "./Book";

class Search extends Component {
  state = { searched: [], query: "" };
  updateQuery = (query) => {
    this.setState(() => ({ query: query }));
    if (query) {
      BooksAPI.search(query).then((data) =>
        data.error
          ? this.setState({ searched: [] })
          : this.setState({ searched: data })
      );
    } else this.setState({ searched: [] });
  };
  checkshelf(b) {
    const book = this.props.books.find((book) => book.id === b.id);
    if (book) {
      return book.shelf;
    } else {
      return "none";
    }
  }
  render() {
    const { searched } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searched.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  changeShelf={this.props.changeShelf}
                  defaultValue={this.checkshelf(book)}
                  IsResult={true}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
