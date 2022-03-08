import React, { useState } from "react";
import people from "./data";
function AppSlider() {
  const [index, setIndex] = useState(0);
  console.log(people);
  const { image, name, quote, title } = people[index];

  function checkNumb(number) {
    if(number > people.length -1) {
      return 0
    }
    if(number < 0) {
      return people.length -1
    }
    return number
  }
  function nextImg() {
    setIndex(prevImg => {
      let tempArr = prevImg + 1
      return checkNumb(tempArr)
    })
  }

  function prevImg() {
    setIndex(prevImg => {
      let tempArr = prevImg -1
      return checkNumb(tempArr)
    })
  }

  function randomImg() {
    let randomNum = Math.floor(Math.random() * people.length)
   
     randomNum = index + 1
    setIndex(checkNumb(randomNum))
    console.log(randomNum)
  }

  return (
    <div>
      <button onClick={nextImg}>Next</button>
      <img src={image} />
      <button onClick={prevImg}>Prev</button>
      <button onClick={randomImg}>random</button>
      <p>{name}</p>
      <p>{quote}</p>
      <p>{title}</p>
    </div>
  );
}

export default AppSlider;
