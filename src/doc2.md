import { useState } from "react";
import React from "react";

export default function Books(props) {
  //   const [books, setBooks] = useState(
  //     props.booksData && props.booksData.length > 0
  //     ? props.booksData
  //     : []
  //   );
  const [books, setBooks] = useState([]);
//   console.log(books);
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");


  const booksObject = [
    ...books,
    {
      id: books.length + 1,
      text: bookName.trim(),
      text2: bookAuthor.trim(),
      
    },
    
  ];

  function handleInputChange(e) {
    setBookName(e.target.value);
    props.takeDataFromBooks(booksObject);

  }

  function handleInputChangeBookAuthor(e) {
    setBookAuthor(e.target.value);
    props.takeDataFromBooks(booksObject);

  }

  function handleFormSubmit(e) {
    e.preventDefault();

    
    if (bookName && bookAuthor !== "") {
      setBooks(booksObject);
    }

    setBookName("");
    setBookAuthor("");
  }

  function deleteEntry(id) {
    const deleteItem = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(deleteItem);
    props.takeDataFromBooks(deleteItem);
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input
          name="book Name"
          type="text"
          placeholder="Add Book Name"
          value={bookName}
          onChange={handleInputChange}
        />
        <hr />
        <input
          name="book Author"
          type="text"
          placeholder="Author's Name"
          value={bookAuthor}
          onChange={handleInputChangeBookAuthor}
        />
      </form>
      {/* <button type="submit">Submit</button> */}


      {/* {books.map((book) => (
        <p key={book.id}>
          {book.text} {book.text2}
          <button
            onClick={() => {
              deleteEntry(book.id);
            }}
          >
            Delete entry
          </button>
        </p>
      ))} */}
    </div>
  );
}
