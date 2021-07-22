//first layout
import React from "react";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import Search from "./Search";
import Shelfs from "./Shelfs";

class BooksApp extends React.Component {
  state = {
    books: [],
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  changeShelf = (Book, shelf, SerchRes) => {
    BooksAPI.update(Book, shelf).then(() => {
      // assign value from the <select/> to the book shelf
      Book.shelf = shelf;
      if (SerchRes) {
        this.setState((prevState) => ({
          books: [...prevState.books, Book],
        }));
      } else {
        this.setState([]);
      }
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => (
            <Search books={this.state.books} changeShelf={this.changeShelf} />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <Shelfs books={this.state.books} changeShelf={this.changeShelf} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
