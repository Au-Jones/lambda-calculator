import React from "react";

// const NumberButton = () => {

const NumberButton = (props) => {
  console.log(props);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className = {props.numberProp == 0 ? "number_button zero" : "number_button"}
      // className="number_button"
      //onClick={() => props.setNumberState(props.numberState)}      
      >
      {props.numberProp} 
     </button>      
    </>
  );
};

export default NumberButton;