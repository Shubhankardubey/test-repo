import { useState } from "react";
import React from "react";
import { nanoid } from "@reduxjs/toolkit";

export default function Books(props) {
  const [booksObj, setBooksObj] = useState({
    text: "",
    text2: "",
    genre: ""
  });
  // console.log(booksObj.genre)

  function handleInputChange(e) {
    setBooksObj({
      ...booksObj,
      text: e.target.value,
    });
  }

  function handleInputChangeBookAuthor(e) {
    //setBookAuthor(e.target.value);
    setBooksObj({
      ...booksObj,
      text2: e.target.value,
    });
  }

  function handleChange(event) {
    const { name } = event.target;
    setBooksObj((prevFormData) => {
      return {
        ...prevFormData,
        genre:name
      };
    });
  }

  const sendDataToParent = () => {
    if(!booksObj["text"]){
      return alert("Please Fill Book Name")
    }
    if(!booksObj["text2"]){
      return alert("Please Fill Author Name")
    }
    if(!booksObj["genre"]){
      return alert("Please Choose Book Genre")
    }
    var currentdate = new Date(); 
var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
          props.takeDataFromBooks({ ...booksObj, id: nanoid(), date: datetime  });
      setBooksObj({
        text: "",
        text2: "",
        genre: false
      });
    
  };

  return (
    <div className="App">
      <form>
        <input
          name="book Name"
          type="text"
          placeholder="Add Book Name"
          value={booksObj.text}
          onChange={handleInputChange}
        />
        <hr />
        <input
          name="book Author"
          type="text"
          placeholder="Author's Name"
          value={booksObj.text2}
          onChange={handleInputChangeBookAuthor}
        />
        <hr />
        <input
          type="radio"
          // id="other"
          name="novel"
          value={booksObj.genre}
          checked={booksObj.genre==="novel"}
          
          // checked={booksObj.genre}
          onChange={handleChange}
        />
        <label htmlFor="novel">Novel</label>

        <input
          type="radio"
          // id="other"
          name="other"
          value={booksObj.genre}
          checked={booksObj.genre ==="other"}
          onChange={handleChange}
        />
        <label htmlFor="other">Other</label>

        <hr />
        <button onClick={() => sendDataToParent()} type="button">
          Add to Bookshelf
        </button>
      </form>
    </div>
  );
}
