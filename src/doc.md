import { useState } from "react";
import "./App.css";
import React from "react";
import Preview from "./components/Preview"
import Books from "./components/Books";

export default function App() {
  const [phase, setPhase] = useState(1)
  const [booksData, setBooksData] = useState([])
  console.log(booksData)
 
  const setNewPhase = (newPhase) => {
    setPhase(newPhase)
  }

  const takeDataFromBooks = (value) => {
    setBooksData(value)
  }
 
  return (
    <div className="App">
     {phase === 1 && (
       <>
       <Books booksData={booksData} takeDataFromBooks={takeDataFromBooks}/>
       <button onClick={()=> setNewPhase(2)} type="button"> Preview</button>
       </>
     )}
    {phase === 2 && (
       <>
       <Preview booksData={booksData}/>
       <button onClick={()=> setNewPhase(1)} type="button"> Edit</button>
       </>
     )}

    </div>
  );
}
