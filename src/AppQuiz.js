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
        options:[...element.incorrect_answers,...[element.correct_answer]],
        id: nanoid(),
        userSelectedOption:""
      };
    });
    setIsLoading(false)
    setQuestions(querr);
  }

  const handleUserClick = (e,questionIndex) => {
  //  console.log(questionIndex,e.target.value)
   let tempQuesArr = copyVariable(questions)
  tempQuesArr[questionIndex]['userSelectedOption'] =  e.target.value
  setQuestions(tempQuesArr)
  }

  function copyVariable(variable){
    return variable
  }

  const [userScore, setUserScore] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const submitQuiz = () => {
    let score = 0
    questions.forEach(eachQuestion=>{
      if(eachQuestion['userSelectedOption'] === eachQuestion['correctAnswer']){
        score += 10
      }
    })
    setSubmitted(true)
    setUserScore(score)
  }

  const quizAgain = () => {
    setIsLoading(true);
    setSubmitted(false)
    setQuestions([])
    fetchData();
  }

  return (
    <div className="App">
      {!submitted && <>
      {questions.map((queries,eachQuestionIndex) => {
        if(isLoading) {
          return <h1>Loading...</h1>
        } 
             return (
          
          <div key={queries.id}>
            <h3>{queries.question}</h3>
            <br />
           <div className="queryContainer">
             {/* <p onClick={handleUserClick}>{queries.correctAnswer}</p>
            <p onClick={handleUserClick}>{queries.incorrectAnswers[0]}</p>
            <p onClick={handleUserClick}>{queries.incorrectAnswers[1]}</p>
            <p onClick={handleUserClick}>{queries.incorrectAnswers[2]}</p> */}
            {queries.options && queries.options.length > 0 && queries.options.map((eachOption, optionIndex)=>{
              return (
                <>
                <input onClick={(e)=>handleUserClick(e,eachQuestionIndex)} type="radio" name={eachQuestionIndex} key={optionIndex} value={eachOption} />&nbsp;{eachOption}&nbsp;
                </>
              )
            })}
             </div> 
            <br />
          </div>
        );
        }
     
      )}
      <button type="button" onClick={submitQuiz}>check answers</button>
      </>}
      {submitted && <>
       Your Score is : {userScore}
       <button type="button" onClick={quizAgain}>Take Quiz Again</button>
      </>}
    </div>
  );
}

export default App;


// Gender
// Male name = "gender"
// Female name = "gender"
