import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

class Shelfs extends Component {
  state = {};

  render() {
    const wtrb = this.props.books.filter((book) => book.shelf === "wantToRead");
    const rb = this.props.books.filter((book) => book.shelf === "read");
    const crb = this.props.books.filter(
      (book) => book.shelf === "currentlyReading"
    );
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">CurrentlyReading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {crb.map((book) => (
                      <li key={book.id}>
                        <Book
                          book={book}
                          changeShelf={this.props.changeShelf}
                          IsResult={false}
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {rb.map((book) => (
                      <li key={book.id}>
                        <Book
                          book={book}
                          changeShelf={this.props.changeShelf}
                          IsResult={false}
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {wtrb.map((book) => (
                      <li key={book.id}>
                        <Book
                          book={book}
                          changeShelf={this.props.changeShelf}
                          IsResult={false}
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Shelfs;
