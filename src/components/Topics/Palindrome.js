import React, { useState } from "react";

const Palindrome = () => {
  const [userInput, setUserInput] = useState("");
  const [palindrome, setPalindrome] = useState("");

  const isPalindrome = (props) => {
    let result = "";
    let reversed = props.split("").reverse().join("");
    if (props === reversed) {
      result = "Yes";
    } else result = "No";
    setPalindrome(result);
  };

  const inputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const submitHandler = () => {
    isPalindrome(userInput);
  };

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Palindrome</h4>
      <input className="inputLine" onChange={inputChangeHandler}></input>
      <button className="confirmationButton" onClick={submitHandler}>
        Submit
      </button>
      <span className="resultsBox">Is it a palindrome? {palindrome}</span>
    </div>
  );
};

export default Palindrome;
