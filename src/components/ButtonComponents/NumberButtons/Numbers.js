import React from "react";
import React, { useState } from "react";

//import any components needed

import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      <div className="button_container">

        {numberState.map(item => <NumberButton numberProp={item} />
        )}

      </div>
    </div>
  );
};

export default Numbers;
