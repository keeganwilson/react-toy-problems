import React, { useState } from "react";

const EvenAndOdd = () => {
  const [evenArray, setEvenArray] = useState([]);
  const [oddArray, setOddArray] = useState([]);
  const [userInput, setUserInput] = useState("");

  const inputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const onClickHandler = (event) => {
    let evens = [];
    let odds = [];
    let inputArr = userInput.split(",");
    for (let i = 0; i < inputArr.length; i++) {
      if (+inputArr[i] % 2 === 0) {
        evens.push(+inputArr[i]);
      } else odds.push(+inputArr[i]);
    }

    setEvenArray(evens);
    setOddArray(odds);
    setUserInput("");
  };

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input className="inputLine" onChange={inputChangeHandler}></input>
      <button className="confirmationButton" onClick={onClickHandler}>
        Submit
      </button>
      <span className="resultsBox">Evens: {JSON.stringify(evenArray)}</span>
      <span className="resultsBox">Odds: {JSON.stringify(oddArray)}</span>
    </div>
  );
};

export default EvenAndOdd;
