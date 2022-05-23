import React, { useState } from "react";

const FilterObject = () => {
  const routes = [
    {
      name: "The Nose",
      grade: "5.13a",
      good: true,
    },
    {
      name: "Astroman",
      formation: "Washington Column",
      length: 8,
    },
    {
      name: "The Rostrum",
      grade: "5.11c",
      length: 7,
    },
    {
      formation: "El Cap",
      grade: "5.12d",
      length: 32,
    },
  ];

  const [unfilteredArray, setUnfilteredArray] = useState(routes);
  const [userInput, setUserInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  const inputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const filterRoutes = (prop) => {
    let filtered = [];
    for (let i = 0; i < unfilteredArray.length; i++) {
      if (routes[i].hasOwnProperty(prop)) {
        filtered.push(routes[i]);
      }
    }
    setFilteredArray(filtered);
    console.log(filtered);
  };

  const submitHandler = () => {
    filterRoutes(userInput);
  };

  return (
    <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzleText">
        Unfiltered Array: {JSON.stringify(unfilteredArray)}
      </span>
      <input className="inputLine" onChange={inputChangeHandler}></input>
      <button className="confirmationButton" onClick={submitHandler}>
        Submit
      </button>
      <span className="resultsBox filterObjectPB">
        Filtered Array: {JSON.stringify(filteredArray)}
      </span>
    </div>
  );
};

export default FilterObject;
