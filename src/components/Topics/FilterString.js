import React, { useState } from "react";

const FilterString = () => {
  const strings = [
    "The Yankees are my favorite baseball team.",
    "Trad climbing is my favorite athletic activity",
    "I have 2 dogs and 1 cat. They are a handful.",
    "The Yankees currently have the best record in baseball.",
  ];

  const [unfilteredArray, setUnfilteredArray] = useState(strings);
  const [userInput, setUserInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  const inputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const filterStrings = (props) => {
    let filtered = [];
    for (let i = 0; i < unfilteredArray.length; i++) {
      if (strings[i].includes(props)) {
        filtered.push(strings[i]);
      }
    }
    console.log(filtered);
    setFilteredArray(filtered);
  };

  const submitHandler = () => {
    filterStrings(userInput);
  };

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Filter String</h4>
      <span className="puzzleText">Unfiltered: {unfilteredArray}</span>
      <input className="inputLine" onChange={inputChangeHandler}></input>
      <button className="confirmationButton" onClick={submitHandler}>
        Submit
      </button>
      <span className="resultsBox filterStringRB">
        Filtered: {filteredArray}
      </span>
    </div>
  );
};

export default FilterString;
