import "./App.css";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(questions);

  useEffect(() => {
    fetchData();
    setIsLoading(true);
  }, []);

  async function fetchData() {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=3&type=multiple"
    );
    const data = await response.json();
    const querr = data.results.map((element) => {
      return {
        question: element.question,
        correctAnswer: element.correct_answer,
        incorrectAnswers: [...element.incorrect_answers],
        id: nanoid(),
      };
    });
    setIsLoading(false)
    setQuestions(querr);
  }

  const handleUserClick = (e) => {
   console.log(e.target)
   const correct = questions
   console.log(correct)
  //  if(e.target === questions.correctAnswer) {
  //    return console.log("correct")
  //  }
  }

  return (
    <div className="App">
      {questions.map((queries) => {
        if(isLoading) {
          return <h1>Loading...</h1>
        } 
             return (
          
          <div key={queries.id}>
            <h3>{queries.question}</h3>
            <br />
           <div className="queryContainer">
             <p onClick={handleUserClick}>{queries.correctAnswer}</p>
            <p onClick={handleUserClick}>{queries.incorrectAnswers[0]}</p>
            <p onClick={handleUserClick}>{queries.incorrectAnswers[1]}</p>
            <p onClick={handleUserClick}>{queries.incorrectAnswers[2]}</p>
             </div> 
            <br />
          </div>
        );
        }
     
      )}
      <button>check answers</button>
    </div>
  );
}

export default App;
