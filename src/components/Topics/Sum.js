import React, { useState } from "react";

const Sum = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(null);

  const add = (num1, num2) => {
    let sum = +num1 + +num2;
    setSum(sum);
  };

  const inputChangeHandler1 = (event) => {
    setNumber1(event.target.value);
  };

  const inputChangeHandler2 = (event) => {
    setNumber2(event.target.value);
  };

  const submitHandler = () => {
    add(number1, number2);
  };

  return (
    <div className="puzzleBox sumPB">
      <h4>Sum</h4>
      <input className="inputLine" onChange={inputChangeHandler1}></input>
      <input className="inputLine" onChange={inputChangeHandler2}></input>
      <button className="confirmationButton" onClick={submitHandler}>
        Submit
      </button>
      <span className="resultsBox">Result: {sum}</span>
    </div>
  );
};

export default Sum;
