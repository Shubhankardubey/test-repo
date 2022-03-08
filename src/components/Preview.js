import React from "react";
import { useState } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

export default function Preview(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentInput, setCurrentInput] = useState({ text: "", text2: "" , genre:""});
  
  // console.log(query);
  // const [isSearching, setIsSearching] = useState(false);

  // this is for searching
  const [query, setQuery] = useState("");

  // this is for dropdown
  const [dropDownSearch, setDropDownSearch] = useState("")
  console.log("props.booksData" , props.booksData)
  const [filteredTodos, setFilteredTodos] = useState(props.booksData)

// function filtering() {
//   const dropFilter = props.booksData.includes(x =>  )
// }



  
  function handleEditInput(e) {
    setCurrentInput({
      ...currentInput,
      [e.target.name]: e.target.value,
    });
  }

  function handleEditClick(book) {
    setIsEditing(true);
    setCurrentInput({ ...book });
  }

  React.useEffect(()=>{
    console.log("rendered")
    // setFilteredTodos(props.booksData)
  },[])

  function handleEditFormSubmit(e) {
    e.preventDefault();
    let tempArr = copyVariable(props.booksData)
    const updatedItem = tempArr.map((book) => {
      return book.id === currentInput.id ? currentInput : book;
    });
    setFilteredTodos(updatedItem)
    
    props.handleUpdateTodo(currentInput.id, currentInput);
    
    setIsEditing(false);
    toastr.options = {
      positionClass: "toast-top-right",
      hideDuration: 300,
      timeOut: 2000,
      closeButton: false,
      progressBar: true,
      preventDuplicates: true,
      closeButton: true,
    };
    toastr.clear();
    setTimeout(() => toastr.success("Edited"), 300);
  }

  console.log(props.booksData);

  function dropDown(e) {
    filterHandler(e.target.value,query)
  }

  function querySearch(e) {
    //setQuery(e.target.value);
    filterHandler(dropDownSearch, e.target.value)
    //setIsSearching(true);
  }

  const filterHandler = (dropdownValue,searchValue) => {
    // switch(dropdownValue){
    //   case 'novel':
    //     setFilteredTodos(props.booksData.filter(todo => todo['genre'] === "novel"));
    //     break;
    //   case 'other':
    //     setFilteredTodos(props.booksData.filter(todo => todo['genre'] === "other"));
    //     break;
    //   default:
    //     setFilteredTodos(props.booksData);
    //     break;
    // }
    // hello world all ALL AlL shubhankar
    //!dropdownValue.match(/all/gi)
    console.log("props.booksData", props.booksData)
    console.log("dropdownValue", dropdownValue)
    let tempArr = copyVariable(props.booksData)
    if(dropdownValue){
      tempArr = tempArr.filter((todo => dropdownValue !== 'all' ? todo['genre'] === dropdownValue : todo['genre']))
    }
    if(searchValue){
      tempArr = tempArr.filter((todo)=> todo['text'].includes(searchValue) || todo['text2'].includes(searchValue)  )
    }
    setFilteredTodos(tempArr);
    setDropDownSearch(dropdownValue)
    setQuery(searchValue)
  };

  function copyVariable(variable){
    return variable
  }

  function deleteItemFromList(id){
    // this is for maintaing the state in preview component
    let tempArr = copyVariable(props.booksData)
    const deleteItem = tempArr.filter((book) => {
      return book.id !== id;
    }).filter(Boolean);
    setFilteredTodos(deleteItem)
    
    // this is for maintaing the state in app component
    props.deleteBtn(id)
  }

  function handleSelectedRadio(event) {
    const { name } = event.target;
    // setBooksObj((prevFormData) => {
    //   return {
    //     ...prevFormData,
    //     genre:name
    //   };
    // });
    setCurrentInput({
      ...currentInput,
      "genre": name,
    });
  }

  return (
    <div>
      <input placeholder="Search here" onChange={querySearch} />
      <select name="genre" onChange={dropDown}>
        <option value="all">All</option>
        <option value="novel">Novel</option>
        <option value="other">Other</option>
      </select>

      {/* {filteredTodos.map((filterEl)=> (
        <p>{filterEl.text} {filterEl.text2}</p>
      ))} */}
    
      {/* {isSearching && (
        <>
          {props.booksData
            .filter((post) => {
              if (query === "") {
                return "";
              }
              if (
                post.text.toLowerCase().includes(query.toLowerCase()) ||
                post.text2.toLowerCase().includes(query.toLowerCase())
              ) {
                return post;
              }
            })
            .map((post, index) => (
              <div className="box" key={index}>
                <p>
                  {post.text} {post.text2}
                </p>
              </div>
            ))}
        </>
      )} */}
      {filteredTodos && filteredTodos.length > 0 && (
        <div className="bookShelf">
          {filteredTodos.map((book) => {
            return (
              <div className="book" key={book.id}>
                <p>{book.text}</p>
                <p>{book.text2}</p>
                <p>Category:{book.genre}</p>
                <p>time added:{book.date}</p>
                <button
                  className="delete"
                  id="btn"
                  onClick={() => {
                    deleteItemFromList(book.id);
                  }}
                >
                  Delete
                </button>
                <button
                  className="edit"
                  onClick={() => {
                    handleEditClick(book);
                  }}
                >
                  Edit
                </button>
              </div>
            );
          })}
        </div>
      )}
      <div></div>
      {isEditing && (
        <form onSubmit={handleEditFormSubmit}>
          <input
            name="text"
            type="text"
            placeholder="Edit Book Name"
            value={currentInput.text}
            onChange={(e) => handleEditInput(e)}
          />
          <input
            name="text2"
            type="text"
            placeholder="author name"
            value={currentInput.text2}
            onChange={(e) => handleEditInput(e)}
          />
    <input
          type="radio"
          // id="other"
          name="novel"
          value={currentInput.genre}
          checked={currentInput.genre==="novel"}
          
          // checked={booksObj.genre}
          onChange={(e) => handleSelectedRadio(e)}
        />
        <label htmlFor="novel">Novel</label>

        <input
          type="radio"
          // id="other"
          name="other"
          value={currentInput.genre}
          checked={currentInput.genre ==="other"}
          onChange={(e) => handleSelectedRadio(e)}
        />
        <label htmlFor="other">Other</label>
          <button>submit</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      )}

      {/* {props.booksData && props.booksData.length > 0 && (
        <div className="bookShelf">
          {props.booksData.map((book) => {
            return (
              <div className="book" key={book.id}>
                <p>{book.text}</p>
                <p>{book.text2}</p>
                <p>Category:{book.genre}</p>
                <p>time added:</p>
                <button
                  className="delete"
                  id="btn"
                  onClick={() => {
                    props.deleteBtn(book.id);
                  }}
                >
                  Delete
                </button>
                <button
                  className="edit"
                  onClick={() => {
                    handleEditClick(book);
                  }}
                >
                  Edit
                </button>
              </div>
            );
          })}
        </div>
      )} */}
    </div>
  );
}
