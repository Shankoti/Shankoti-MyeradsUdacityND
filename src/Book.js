import React, { Component } from "react";
class Book extends Component {
  state = {};

  imageSrc(book) {
    if (book.imageLinks) {
      return `url(${book.imageLinks.thumbnail})`;
    } else {
      return `url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png)`;
    }
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: this.imageSrc(this.props.book),
            }}
          />
          <div className="book-shelf-changer">
            <select
              defaultValue={this.props.defaultValue}
              value={this.props.book.shelf}
              onChange={(e) => {
                this.props.changeShelf(
                  this.props.book,
                  e.target.value,
                  this.props.IsResult
                );
              }}
            >
              <option value="move" disabled>
                Move to...
              </option>

              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
              <option value="currentlyReading">Currently Reading</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
}

export default Book;
